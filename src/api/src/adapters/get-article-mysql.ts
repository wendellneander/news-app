import { GetArticleRepository } from "../application/contracts/article-repository"
import { PrismaClient } from "@prisma/client"
import Article from "../domain/article"
import Category from "../domain/category"
import Author from "../domain/author"

export default class GetArticleMysql implements GetArticleRepository {
  private db

  constructor() {
    this.db = new PrismaClient()
  }

  async getArticle(id: number): Promise<Article> {
    const article = this.db.article.findUnique({
      where: {
        id,
      },
      include: {
        author: true,
        category: true,
      },
    })
    const category = new Category(
      article.category.id,
      article.category.name,
      article.category.createdAt,
    )
    const author = new Author(
      article.author.id,
      article.author.name,
      article.author.createdAt,
    )
    return new Article(
      article.id,
      article.title,
      article.content,
      category,
      author,
    )
  }
}
