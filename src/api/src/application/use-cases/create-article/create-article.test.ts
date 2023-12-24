import CreateArticleMysql from "../../../adapters/create-article-mysql"
import GetAuthorMysql from "../../../adapters/get-author-mysql"
import GetCategoryMysql from "../../../adapters/get-category-mysql"
import CreateArticle from "./create-article"
import CreateArticleInput from "./create-article-input"
import { expect, jest, describe, it } from "@jest/globals"

describe("create article", () => {
  it("should create a article", async () => {
    const createArticleRepository = new CreateArticleMysql()
    const getCategoryRepository = new GetCategoryMysql()
    const getAuthorRepository = new GetAuthorMysql()

    const useCase = new CreateArticle(
      createArticleRepository,
      getCategoryRepository,
      getAuthorRepository,
    )

    const input = new CreateArticleInput(
      "New Article",
      "Article Content...",
      1,
      1,
    )
    const output = await useCase.execute(input)
    const expectedOuput = {
      id: 1,
      title: "New Article",
      content: "Article Content...",
      category: {
        id: 1,
        name: "Category",
      },
      author: {
        id: 1,
        name: "Author",
      },
      createdAt: "2023-12-21",
    }

    expect(output).toEqual(expectedOuput)
  })
})
