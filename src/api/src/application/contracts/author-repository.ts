import Author from "../../domain/author"

export interface GetAuthorRepository {
  getAuthor: (id: number) => Promise<Author>
}
