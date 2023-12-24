import { PrismaClient } from "@prisma/client"
import { GetCategoryRepository } from "../application/repositories/category-repository"
import Category from "../domain/category"

export default class GetCategoryMysql implements GetCategoryRepository {
  private db

  constructor() {
    this.db = new PrismaClient()
  }

  async getCategory(id: number): Promise<Category> {
    const category = await this.db.category.findUnique({
      where: {
        id,
        deletedAt: null,
      },
    })

    if (!category) {
      throw new Error("Category not found.")
    }
    
    return new Category(
      category.id,
      category.name,
      category.createdAt.toDateString(),
      category.deletedAt?.toDateString(),
    )
  }
}
