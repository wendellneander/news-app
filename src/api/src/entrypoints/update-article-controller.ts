import { UpdateArticleRepository } from "../application/repositories/article-repository"
import { GetAuthorRepository } from "../application/repositories/author-repository"
import { GetCategoryRepository } from "../application/repositories/category-repository"
import SlugGeneratorService from "../application/services/slug-generator"
import UpdateArticle from "../application/use-cases/update-article/update-article"
import UpdateArticleInput from "../application/use-cases/update-article/update-article-input"
import { Request, Response } from "express"

export default class UpdateArticleController {
  constructor(
    private updateArticleRepository: UpdateArticleRepository,
    private getCategoryRepository: GetCategoryRepository,
    private getAuthorRepository: GetAuthorRepository,
    private slugService: SlugGeneratorService,
  ) {}

  handle = async (req: Request, res: Response): Promise<Response> => {
    try {
      const input = new UpdateArticleInput(
        req.params.slug,
        req.body.title,
        req.body.content,
        req.body.categoryId,
      )

      const useCase = new UpdateArticle(
        this.updateArticleRepository,
        this.getCategoryRepository,
        this.getAuthorRepository,
        this.slugService,
      )

      const result = await useCase.execute(input)
      return res.status(200).send(result)
    } catch (e: any) {
      console.log("ERROR (UpdateArticleController):", e)
      return res.status(400).send({
        message: e.message,
      })
    }
  }
}
