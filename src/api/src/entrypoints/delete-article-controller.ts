import { DeleteArticleRepository } from "../application/repositories/article-repository"
import DeleteArticle from "../application/use-cases/delete-article/delete-article"
import DeleteArticleInput from "../application/use-cases/delete-article/delete-article-input"
import { Request, Response } from "express"

export default class DeleteArticleController {
  constructor(private deleteArticleRepository: DeleteArticleRepository) {}

  handle = async (req: Request, res: Response): Promise<Response> => {
    try {
      const input = new DeleteArticleInput(parseInt(req.params.id))
      const useCase = new DeleteArticle(this.deleteArticleRepository)
      const result = await useCase.execute(input)
      return res.status(200).send(result)
    } catch (e) {
      return res.status(400).send(e)
    }
  }
}
