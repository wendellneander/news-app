import UpdateArticleMysql from "../adapters/update-article-mysql"
import GetAuthorMysql from "../adapters/get-author-mysql"
import GetCategoryMysql from "../adapters/get-category-mysql"
import UpdateArticleController from "./update-article-controller"
import SlugService from "../adapters/slug-service"

export default class UpdateArticleControllerFactory {
  static create(): UpdateArticleController {
    const updateArticleRepository = new UpdateArticleMysql()
    const getCategoryRepository = new GetCategoryMysql()
    const getAuthorRepository = new GetAuthorMysql()
    const slugService = new SlugService()
    return new UpdateArticleController(
      updateArticleRepository,
      getCategoryRepository,
      getAuthorRepository,
      slugService,
    )
  }
}
