import { DeleteArticleRepository } from "../application/repositories/article-repository"
import { PrismaClient } from "@prisma/client"

export default class DeleteArticleMysql implements DeleteArticleRepository {
  private db

  constructor() {
    this.db = new PrismaClient()
  }

  async deleteArticle(slug: string): Promise<void> {
    await this.db.article.update({
      where: {
        slug,
        deletedAt: null,
      },
      data: {
        deletedAt: new Date(),
      },
    })
  }
}
