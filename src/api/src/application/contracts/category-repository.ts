import Category from "../../domain/entities/category"

export default interface GetCategoryRepository {
  getCategory: (id: number) => Promise<Category>
}
