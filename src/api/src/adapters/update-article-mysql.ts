import { UpdateArticleRepository } from "../application/repositories/article-repository"
import Article from "../domain/article"
import Author from "../domain/author"
import Category from "../domain/category"
import { PrismaClient } from "@prisma/client"

export default class UpdateArticleMysql implements UpdateArticleRepository {
  private db

  constructor() {
    this.db = new PrismaClient()
  }

  async updateArticle(
    id: number,
    {
      title,
      content,
      categoryId,
    }: { title: string; content: string; categoryId: number },
  ): Promise<Article> {
    await this.db.article.update({
      where: { id },
      data: {
        title,
        content,
        categoryId,
      },
    })

    const article = await this.db.article.findUnique({
      where: {
        id,
        deletedAt: null,
      },
      include: {
        author: true,
        category: true,
      },
    })

    if (!article) {
      throw new Error("Article not found.")
    }

    const category = new Category(
      article.category.id,
      article.category.name,
      article.category.createdAt.toDateString(),
      article.category.deletedAt?.toDateString(),
    )
    const author = new Author(
      article.author.id,
      article.author.name,
      article.author.createdAt.toDateString(),
      article.author.deletedAt?.toDateString(),
    )
    return new Article(
      article.id,
      title,
      content,
      category,
      author,
      article.createdAt.toDateString(),
      article.deletedAt?.toDateString(),
    )
  }
}