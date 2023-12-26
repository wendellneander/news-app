import { PrismaClient } from "@prisma/client"
import { ListCategoriesRepository } from "../application/repositories/category-repository"
import Category from "../domain/category"

export default class ListCategoriesMysql implements ListCategoriesRepository {
  private db

  constructor() {
    this.db = new PrismaClient()
  }

  async listCategories(page: number, pageSize: number): Promise<Category[]> {
    const categories = await this.db.category.findMany({
      skip: page * pageSize,
      take: pageSize,
      where: {
        deletedAt: null,
      },
      orderBy: {
        id: "desc",
      },
    })

    return categories.map(
      (category) =>
        new Category(
          category.id,
          category.name,
          category.createdAt.toDateString(),
          category.deletedAt?.toDateString(),
        ),
    )
  }
}
