import { CreateArticleRepository } from "../application/repositories/article-repository"
import Article from "../domain/article"
import Author from "../domain/author"
import Category from "../domain/category"
import { PrismaClient } from "@prisma/client"

export default class CreateArticleMysql implements CreateArticleRepository {
  private db

  constructor() {
    this.db = new PrismaClient()
  }

  async createArticle(
    title: string,
    content: string,
    category: Category,
    author: Author,
  ): Promise<Article> {
    const article = await this.db.article.create({
      data: {
        title,
        content,
        categoryId: category.id,
        authorId: author.id,
      },
    })
    return new Article(article.id, title, content, category, author)
  }
}
