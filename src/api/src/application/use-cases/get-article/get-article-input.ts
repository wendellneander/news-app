export default class GetArticleInput {
  constructor(readonly id: number) {}

  validate() {
    if (!this.id) {
      throw new Error("Id is required.")
    }
  }
}
