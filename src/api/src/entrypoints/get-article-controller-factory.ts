import GetArticleMysql from "../adapters/get-article-mysql"
import GetArticleController from "./get-article-controller"

export default class GetArticleControllerFactory {
  static create(): GetArticleController {
    const getArticleRepository = new GetArticleMysql()
    return new GetArticleController(getArticleRepository)
  }
}
