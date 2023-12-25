import { ListArticlesRepository } from "../application/repositories/article-repository"
import ListArticles from "../application/use-cases/list-articles/list-articles"
import ListArticlesInput from "../application/use-cases/list-articles/list-articles-input"
import { Request, Response } from "express"

export default class ListArticlesController {
  constructor(private listArticleRepository: ListArticlesRepository) {}

  handle = async (req: Request, res: Response): Promise<Response> => {
    try {
      const input = new ListArticlesInput(
        parseInt(req.query.page as string),
        parseInt(req.query.pageSize as string),
      )
      const useCase = new ListArticles(this.listArticleRepository)
      const result = await useCase.execute(input)
      return res.status(200).send(result)
    } catch (e: any) {
      console.log("ERROR (ListArticlesController):", e)
      return res.status(400).send({
        message: e.message,
      })
    }
  }
}
