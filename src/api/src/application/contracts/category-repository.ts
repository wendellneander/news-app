import Category from "../../domain/entities/category"

export interface GetCategoryRepository {
  getCategory: (id: number) => Promise<Category>
}
