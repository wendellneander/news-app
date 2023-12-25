export default class ListArticlesInput {
  constructor(
    readonly page: number,
    readonly pageSize: number,
  ) {}

  validate() {
    if (this.page !== 0 && this.page) {
      throw new Error("Page is required.")
    }

    if (!this.pageSize) {
      throw new Error("PageSize is required.")
    }
  }
}
