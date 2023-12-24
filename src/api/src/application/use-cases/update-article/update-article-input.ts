export default class CreateArticleInput {
  constructor(
    readonly id: number,
    readonly title: string,
    readonly content: string,
    readonly categoryId: number,
  ) {}

  validate() {
    if (!this.id) {
      throw new Error("Id is required.")
    }

    if (!this.title || this.title.length === 0) {
      throw new Error("Title is required.")
    }

    if (!this.content || this.content.length === 0) {
      throw new Error("Content is required.")
    }

    if (!this.categoryId) {
      throw new Error("CategoryId is required.")
    }
  }
}
