import Category from "../../domain/category"

export interface GetCategoryRepository {
  getCategory: (id: number) => Promise<Category>
}
