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
    const articles = await this.db.article.findMany({
      skip: page * pageSize,
      take: pageSize,
      where: {
        deletedAt: null,
      },
      include: {
        author: true,
        category: true,
      },
      orderBy: {
        id: "desc",
      },
    })

    return articles.map((article) => {
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
        article.title,
        article.content,
        category,
        author,
        article.createdAt.toDateString(),
        article.deletedAt?.toDateString(),
      )
    })
  }
}
