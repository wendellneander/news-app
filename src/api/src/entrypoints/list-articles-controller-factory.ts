import ListArticlesMysql from "../adapters/list-articles-mysql"
import ListArticlesController from "./list-articles-controller"

export default class ListArticlesControllerFactory {
  static create(): ListArticlesController {
    const listArticlesRepository = new ListArticlesMysql()
    return new ListArticlesController(listArticlesRepository)
  }
}
