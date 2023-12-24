import { ListArticlesRepository } from "../application/repositories/article-repository"
import { PrismaClient } from "@prisma/client"
import Article from "../domain/article"
import Category from "../domain/category"
import Author from "../domain/author"

export default class ListArticlesMysql implements ListArticlesRepository {
  private db

  constructor() {
    this.db = new PrismaClient()
  }

  async listArticles(page: number, pageSize: number): Promise<Article[]> {
    const articles = this.db.article.findMany({
      skip: page * pageSize,
      take: pageSize,
      include: {
        author: true,
        category: true,
      },
    })

    return articles.map((article) => {
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
    })
  }
}
