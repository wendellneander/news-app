import DeleteArticleMysql from "../adapters/delete-article-mysql"
import DeleteArticleController from "./delete-article-controller"

export default class DeleteArticleControllerFactory {
  static create(): DeleteArticleController {
    const deleteArticleRepository = new DeleteArticleMysql()
    return new DeleteArticleController(deleteArticleRepository)
  }
}
