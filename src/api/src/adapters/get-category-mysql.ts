import { GetCategoryRepository } from "../application/contracts/category-repository"
import Category from "../domain/category"

export default class GetCategoryMysql implements GetCategoryRepository {
  async getCategory(id: number): Promise<Category> {
    // TODO: get category from mysql
    return new Category(1, "Category")
  }
}
