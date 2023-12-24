import { CreateArticleRepository } from "../../contracts/article-repository"
import { GetAuthorRepository } from "../../contracts/author-repository"
import { GetCategoryRepository } from "../../contracts/category-repository"
import CreateArticleInput from "./create-article-input"
import CreateArticleOutput from "./create-article-ouput"

export default class CreateArticle {
  constructor(
    private createArticleRepository: CreateArticleRepository,
    private getCategoryRepository: GetCategoryRepository,
    private getAuthorRepository: GetAuthorRepository,
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

    const article = await this.createArticleRepository.createArticle(
      input.title,
      input.content,
      category,
      author,
    )

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
