import { GetArticleRepository } from "../application/repositories/article-repository"
import GetArticle from "../application/use-cases/get-article/get-article"
import GetArticleInput from "../application/use-cases/get-article/get-article-input"
import { Request, Response } from "express"

export default class GetArticleController {
  constructor(private getArticleRepository: GetArticleRepository) {}

  handle = async (req: Request, res: Response): Promise<Response> => {
    const input = new GetArticleInput(parseInt(req.params.id))
    const useCase = new GetArticle(this.getArticleRepository)
    const result = await useCase.execute(input)
    return res.send(result)
  }
}
