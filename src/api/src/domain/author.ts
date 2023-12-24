export default class Author {
  constructor(
    readonly id: number | undefined,
    readonly name: string,
    readonly createdAt?: string,
    readonly deletedAt?: string,
  ) {
    if (name.length < 3 || name.length > 100) {
      throw new Error(
        "Author name must have a minimum of 3 characters and a maximum of 100 characters.",
      )
    }
  }
}
