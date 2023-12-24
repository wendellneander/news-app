import { GetAuthorRepository } from "../application/contracts/author-repository"
import Author from "../domain/entities/author"

export default class GetAuthorMysql implements GetAuthorRepository {
  async getAuthor(id: number): Promise<Author> {
    // TODO: get author from mysql
    return new Author(1, "Author")
  }
}
