import { Article } from "@prisma/client"
import {
  CreateArticleRepository,
  GetArticleRepository,
  UpdateArticleRepository,
} from "../../repositories/article-repository"
import { GetAuthorRepository } from "../../repositories/author-repository"
import { GetCategoryRepository } from "../../repositories/category-repository"
import SlugGeneratorService from "../../services/slug-generator"
import CreateArticleInput from "./create-article-input"
import CreateArticleOutput from "./create-article-ouput"

export default class CreateArticle {
  constructor(
    private createArticleRepository: CreateArticleRepository,
    private updateArticleRepository: UpdateArticleRepository,
    private getArticleRepository: GetArticleRepository,
    private getCategoryRepository: GetCategoryRepository,
    private getAuthorRepository: GetAuthorRepository,
    private slugGeneratorService: SlugGeneratorService,
  ) {}

  async execute(input: CreateArticleInput): Promise<CreateArticleOutput> {
    input.validate()

    const category = await this.getCategoryRepository.getCategory(
      input.categoryId,
    )
    if (!category) {
      throw new Error("Category not found.")
    }

    const author = await this.getAuthorRepository.getAuthor(input.authorId)
    if (!author) {
      throw new Error("Author not found.")
    }

    const slug = this.slugGeneratorService.createSlug(input.title)

    let article
    try {
      await this.getArticleRepository.getArticle(slug, true)
      article = await this.updateArticleRepository.updateArticle(slug, {
        title: input.title,
        content: input.content,
        slug,
        categoryId: category.id || 1,
      })
    } catch (e: any) {
      article = await this.createArticleRepository.createArticle(
        input.title,
        input.content,
        slug,
        category,
        author,
      )
    }

    return {
      id: article.id,
      title: article.title,
      content: article.content,
      category: {
        id: article.category.id,
        name: article.category.name,
      },
      author: {
        id: article.author.id,
        name: article.author.name,
      },
      createdAt: article.createdAt,
    }
  }
}
