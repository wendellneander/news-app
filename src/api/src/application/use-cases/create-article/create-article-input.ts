export default class CreateArticleInput {
  constructor(
    readonly title: string,
    readonly content: string,
    readonly categoryId: number,
    readonly authorId: number,
  ) {}

  validate() {
    if (!this.title || this.title.length === 0) {
      throw new Error("Title is required.")
    }

    if (!this.content || this.content.length === 0) {
      throw new Error("Content is required.")
    }

    if (!this.categoryId) {
      throw new Error("CategoryId is required.")
    }

    if (!this.authorId) {
      throw new Error("AuthorId is required.")
    }
  }
}
