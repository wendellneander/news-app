import CreateArticleMysql from "../adapters/create-article-mysql"
import GetArticleMysql from "../adapters/get-article-mysql"
import GetAuthorMysql from "../adapters/get-author-mysql"
import GetCategoryMysql from "../adapters/get-category-mysql"
import SlugService from "../adapters/slug-service"
import UpdateArticleMysql from "../adapters/update-article-mysql"
import CreateArticleController from "./create-article-controller"

export default class CreateArticleControllerFactory {
  static create(): CreateArticleController {
    const createArticleRepository = new CreateArticleMysql()
    const updateArticleRepository = new UpdateArticleMysql()
    const getArticleRepository = new GetArticleMysql()
    const getCategoryRepository = new GetCategoryMysql()
    const getAuthorRepository = new GetAuthorMysql()
    const slugService = new SlugService()
    return new CreateArticleController(
      createArticleRepository,
      updateArticleRepository,
      getArticleRepository,
      getCategoryRepository,
      getAuthorRepository,
      slugService,
    )
  }
}
