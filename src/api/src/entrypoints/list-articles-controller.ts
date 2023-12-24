import { ListArticlesRepository } from "../application/repositories/article-repository"
import ListArticles from "../application/use-cases/list-articles/list-articles"
import ListArticlesInput from "../application/use-cases/list-articles/list-articles-input"
import { Request, Response } from "express"

export default class ListArticlesController {
  constructor(private listArticleRepository: ListArticlesRepository) {}

  handle = async (req: Request, res: Response): Promise<Response> => {
    const input = new ListArticlesInput(
      parseInt(req.body.page),
      parseInt(req.body.pageSize),
    )
    const useCase = new ListArticles(this.listArticleRepository)
    const result = await useCase.execute(input)
    return res.send(result)
  }
}
