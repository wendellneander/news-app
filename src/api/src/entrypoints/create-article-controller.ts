import { CreateArticleRepository } from "../application/repositories/article-repository"
import { GetAuthorRepository } from "../application/repositories/author-repository"
import { GetCategoryRepository } from "../application/repositories/category-repository"
import CreateArticle from "../application/use-cases/create-article/create-article"
import CreateArticleInput from "../application/use-cases/create-article/create-article-input"
import { Request, Response } from "express"

export default class CreateArticleController {
  constructor(
    private createArticleRepository: CreateArticleRepository,
    private getCategoryRepository: GetCategoryRepository,
    private getAuthorRepository: GetAuthorRepository,
  ) {}

  handle = async (req: Request, res: Response): Promise<Response> => {
    const input = new CreateArticleInput(
      req.body.title,
      req.body.content,
      req.body.categoryId,
      req.body.authorId,
    )

    const useCase = new CreateArticle(
      this.createArticleRepository,
      this.getCategoryRepository,
      this.getAuthorRepository,
    )

    const result = await useCase.execute(input)

    return res.send(result)
  }
}
