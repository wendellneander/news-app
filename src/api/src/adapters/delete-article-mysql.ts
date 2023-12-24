import { DeleteArticleRepository } from "../application/repositories/article-repository"
import { PrismaClient } from "@prisma/client"

export default class DeleteArticleMysql implements DeleteArticleRepository {
  private db

  constructor() {
    this.db = new PrismaClient()
  }

  async deleteArticle(id: number): Promise<void> {
    this.db.article.delete({
      where: {
        id,
      },
    })
  }
}
