import Author from "./author"
import Category from "./category"

export default class Article {
  constructor(
    readonly id: number | undefined,
    readonly title: string,
    readonly content: string,
    readonly slug: string,
    readonly category: Category,
    readonly author: Author,
    readonly createdAt?: string,
    readonly deletedAt?: string,
  ) {
    if (title.length < 3 || title.length > 255) {
      throw new Error(
        "Article title must have a minimum of 3 characters and a maximum of 255 characters.",
      )
    }

    if (content.length < 3 || content.length > 1000) {
      throw new Error(
        "Article content must have a minimum of 100 characters and a maximum of 1000 characters.",
      )
    }

    if (slug.length < 3 || slug.length > 2048) {
      throw new Error(
        "Article slug must have a minimum of 3 characters and a maximum of 2048 characters.",
      )
    }
  }
}
