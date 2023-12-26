import { UpdateArticleRepository } from "../../repositories/article-repository"
import { GetAuthorRepository } from "../../repositories/author-repository"
import { GetCategoryRepository } from "../../repositories/category-repository"
import SlugGeneratorService from "../../services/slug-generator"
import UpdateArticleInput from "./update-article-input"
import UpdateArticleOutput from "./update-article-ouput"

export default class UpdateArticle {
  constructor(
    private updateArticleRepository: UpdateArticleRepository,
    private getCategoryRepository: GetCategoryRepository,
    private getAuthorRepository: GetAuthorRepository,
    private slugGeneratorService: SlugGeneratorService,
  ) {}

  async execute(input: UpdateArticleInput): Promise<UpdateArticleOutput> {
    input.validate()

    const category = await this.getCategoryRepository.getCategory(
      input.categoryId,
    )
    if (!category) {
      throw new Error("Category not found.")
    }

    const slug = this.slugGeneratorService.createSlug(input.title)

    const article = await this.updateArticleRepository.updateArticle(
      input.slug,
      {
        title: input.title,
        content: input.content,
        slug,
        categoryId: input.categoryId,
      },
    )

    return {
      id: article.id,
      title: article.title,
      content: article.content,
      slug: article.slug,
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
