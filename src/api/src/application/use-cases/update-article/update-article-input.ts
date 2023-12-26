export default class CreateArticleInput {
  constructor(
    readonly slug: string,
    readonly title: string,
    readonly content: string,
    readonly categoryId: number,
  ) {}

  validate() {
    if (!this.slug) {
      throw new Error("Slug is required.")
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
