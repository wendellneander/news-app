import { DeleteArticleRepository } from "../../repositories/article-repository"
import DeleteArticleInput from "./delete-article-input"
import DeleteArticleOutput from "./delete-article-ouput"

export default class DeleteArticle {
  constructor(private deleteArticleRepository: DeleteArticleRepository) {}

  async execute(input: DeleteArticleInput): Promise<DeleteArticleOutput> {
    input.validate()

    await this.deleteArticleRepository.deleteArticle(input.id)

    return {
      id: input.id,
    }
  }
}
