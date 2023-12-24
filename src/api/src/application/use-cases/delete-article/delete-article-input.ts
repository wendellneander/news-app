export default class DeleteArticleInput {
  constructor(readonly id: number) {}

  validate() {
    if (!this.id) {
      throw new Error("Id is required.")
    }
  }
}
