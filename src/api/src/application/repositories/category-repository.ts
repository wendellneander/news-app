import Category from "../../domain/category"

export interface GetCategoryRepository {
  getCategory: (id: number) => Promise<Category>
}

export interface ListCategoriesRepository {
  listCategories: (page: number, pageSize: number) => Promise<Category[]>
}
