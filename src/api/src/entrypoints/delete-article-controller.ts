import { DeleteArticleRepository } from "../application/contracts/article-repository"
import DeleteArticle from "../application/use-cases/delete-article/delete-article"
import DeleteArticleInput from "../application/use-cases/delete-article/delete-article-input"
import { Request, Response } from "express"

export default class DeleteArticleController {
  constructor(private deleteArticleRepository: DeleteArticleRepository) {}

  handle = async (req: Request, res: Response): Promise<Response> => {
    const input = new DeleteArticleInput(parseInt(req.params.id))
    const useCase = new DeleteArticle(this.deleteArticleRepository)
    const result = await useCase.execute(input)
    return res.send(result)
  }
}
