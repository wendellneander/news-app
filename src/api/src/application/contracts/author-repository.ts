import Author from "../../domain/entities/author"

export interface GetAuthorRepository {
  getAuthor: (id: number) => Promise<Author>
}
