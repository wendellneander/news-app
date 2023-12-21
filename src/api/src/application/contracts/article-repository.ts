import Article from "../../domain/entities/article"
import Author from "../../domain/entities/author"
import Category from "../../domain/entities/category"

export interface CreateArticleRepository {
  createArticle: (
    title: string,
    content: string,
    category: Category,
    author: Author,
  ) => Promise<Article>
}

export interface UpdateArticleRepository {
  updateArticle: (
    id: number,
    {
      title,
      content,
      categoryId,
    }: { title: string; content: string; categoryId: number },
  ) => Promise<Article>
}

export interface DeleteArticleRepository {
  deleteArticle: (id: number) => Promise<void>
}

export interface ListArticleRepository {
  listArticles: () => Promise<Article[]>
}

export default interface GetArticleRepository {
  getArticle: (id: number) => Promise<Article>
}
