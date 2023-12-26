import { CreateArticleRepository } from "../application/repositories/article-repository"
import Article from "../domain/article"
import Author from "../domain/author"
import Category from "../domain/category"
import { Prisma, PrismaClient } from "@prisma/client"

export default class CreateArticleMysql implements CreateArticleRepository {
  private db

  constructor() {
    this.db = new PrismaClient()
  }

  async createArticle(
    title: string,
    content: string,
    slug: string,
    category: Category,
    author: Author,
  ): Promise<Article> {
    if (!category.id) {
      throw new Error("Invalid category.")
    }
    if (!author.id) {
      throw new Error("Invalid author.")
    }

    const articleInput: Prisma.ArticleUncheckedCreateInput = {
      title,
      content,
      slug,
      categoryId: category.id,
      authorId: author.id,
    }
    const article = await this.db.article.create({ data: articleInput })
    return new Article(
      article.id,
      title,
      content,
      slug,
      category,
      author,
      article.createdAt.toDateString(),
      article.deletedAt?.toDateString(),
    )
  }
}
