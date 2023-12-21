import Author from "../../domain/entities/author"

export default interface GetAuthorRepository {
  getAuthor: (id: number) => Promise<Author>
}
