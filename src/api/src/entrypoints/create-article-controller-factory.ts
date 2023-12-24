import CreateArticleMysql from "../adapters/create-article-mysql"
import GetAuthorMysql from "../adapters/get-author-mysql"
import GetCategoryMysql from "../adapters/get-category-mysql"
import CreateArticleController from "./create-article-controller"

export default class CreateArticleControllerFactory {
  static create(): CreateArticleController {
    const createArticleRepository = new CreateArticleMysql()
    const getCategoryRepository = new GetCategoryMysql()
    const getAuthorRepository = new GetAuthorMysql()
    return new CreateArticleController(
      createArticleRepository,
      getCategoryRepository,
      getAuthorRepository,
    )
  }
}
