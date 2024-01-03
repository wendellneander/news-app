import Article from "../../domain/article"
import Author from "../../domain/author"
import Category from "../../domain/category"

export interface CreateArticleRepository {
  createArticle: (
    title: string,
    content: string,
    slug: string,
    category: Category,
    author: Author,
  ) => Promise<Article>
}

export interface UpdateArticleRepository {
  updateArticle: (
    slug: string,
    data: { title: string; content: string; slug: string; categoryId: number },
  ) => Promise<Article>
}

export interface DeleteArticleRepository {
  deleteArticle: (slug: string) => Promise<void>
}

export interface ListArticlesRepository {
  listArticles: (
    page: number,
    pageSize: number,
    categoryId?: number,
  ) => Promise<Article[]>
}

export interface GetArticleRepository {
  getArticle: (slug: string, deleted?: boolean) => Promise<Article>
}
