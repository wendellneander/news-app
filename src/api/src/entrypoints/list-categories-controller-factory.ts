import ListCategoriesMysql from "../adapters/list-categories-mysql"
import ListCategoriesController from "./list-categories-controller"

export default class ListArticlesControllerFactory {
  static create(): ListCategoriesController {
    const listCategoriesRepository = new ListCategoriesMysql()
    return new ListCategoriesController(listCategoriesRepository)
  }
}
