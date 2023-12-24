import { GetArticleRepository } from "../../contracts/article-repository"
import GetArticleInput from "./get-article-input"
import GetArticleOutput from "./get-article-ouput"

export default class GetArticle {
  constructor(private getArticleRepository: GetArticleRepository) {}

  async execute(input: GetArticleInput): Promise<GetArticleOutput> {
    input.validate()

    const article = await this.getArticleRepository.getArticle(input.id)
    if (!article) {
      throw new Error("Article not found.")
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
