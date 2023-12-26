import { ListCategoriesRepository } from "../application/repositories/category-repository"
import ListCategories from "../application/use-cases/list-categories/list-categories"
import ListCategoriesInput from "../application/use-cases/list-categories/list-categories-input"
import { Request, Response } from "express"

export default class ListCategoriesController {
  constructor(private listArticleRepository: ListCategoriesRepository) {}

  handle = async (req: Request, res: Response): Promise<Response> => {
    try {
      const input = new ListCategoriesInput(
        parseInt(req.query.page as string),
        parseInt(req.query.pageSize as string),
      )
      const useCase = new ListCategories(this.listArticleRepository)
      const result = await useCase.execute(input)
      return res.status(200).send(result)
    } catch (e: any) {
      console.log("ERROR (ListCategoriesController):", e)
      return res.status(400).send({
        message: e.message,
      })
    }
  }
}
