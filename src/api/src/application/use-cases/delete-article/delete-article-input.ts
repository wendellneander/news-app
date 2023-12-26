export default class DeleteArticleInput {
  constructor(readonly slug: string) {}

  validate() {
    if (!this.slug) {
      throw new Error("Slug is required.")
    }
  }
}
