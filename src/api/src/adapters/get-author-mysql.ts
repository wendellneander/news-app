import { PrismaClient } from "@prisma/client"
import { GetAuthorRepository } from "../application/repositories/author-repository"
import Author from "../domain/author"

export default class GetAuthorMysql implements GetAuthorRepository {
  private db

  constructor() {
    this.db = new PrismaClient()
  }

  async getAuthor(id: number): Promise<Author> {
    const author = await this.db.author.findUnique({
      where: {
        id,
        deletedAt: null,
      },
    })

    if (!author) {
      throw new Error("Author not found.")
    }
    
    return new Author(
      author.id,
      author.name,
      author.createdAt.toDateString(),
      author.deletedAt?.toDateString(),
    )
  }
}
