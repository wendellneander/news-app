import { ListArticlesRepository } from "../../repositories/article-repository"
import ListArticlesInput from "./list-articles-input"
import ListArticlesOutput from "./list-articles-output"

export default class ListArticles {
  constructor(private listArticleRepository: ListArticlesRepository) {}

  async execute(input: ListArticlesInput): Promise<ListArticlesOutput> {
    input.validate()

        const articles = await this.listArticleRepository.listArticles(
      input.page,
      input.pageSize,
      input.categoryId,
    )

    return {
      articles,
    }
  }
}
