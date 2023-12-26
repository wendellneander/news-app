import { ListCategoriesRepository } from "../../repositories/category-repository"
import ListCategoriesInput from "./list-categories-input"
import ListCategoriesOutput from "./list-categories-output"

export default class ListCategories {
  constructor(private listCategoriesRepository: ListCategoriesRepository) {}

  async execute(input: ListCategoriesInput): Promise<ListCategoriesOutput> {
    input.validate()

    const categories = await this.listCategoriesRepository.listCategories(
      input.page,
      input.pageSize,
    )

    return {
      categories,
    }
  }
}
