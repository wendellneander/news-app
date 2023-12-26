import { GetArticleRepository } from "../application/repositories/article-repository"
import { PrismaClient } from "@prisma/client"
import Article from "../domain/article"
import Category from "../domain/category"
import Author from "../domain/author"

export default class GetArticleMysql implements GetArticleRepository {
  private db

  constructor() {
    this.db = new PrismaClient()
  }

  async getArticle(slug: string, deleted?: boolean): Promise<Article> {
    const whereNotDeleted = { slug, deletedAt: null }
    const whereDeleted = { slug, NOT: { deletedAt: null } }

    const article = await this.db.article.findUnique({
      where: deleted ? whereDeleted : whereNotDeleted,
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
    )
    const author = new Author(
      article.author.id,
      article.author.name,
      article.author.createdAt.toDateString(),
    )
    return new Article(
      article.id,
      article.title,
      article.content,
      article.slug,
      category,
      author,
      article.createdAt.toDateString(),
      article.deletedAt?.toDateString(),
    )
  }
}
