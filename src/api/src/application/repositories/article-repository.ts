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
    id: number,
    {
      title,
      slug,
      content,
      categoryId,
    }: { title: string; content: string; slug: string; categoryId: number },
  ) => Promise<Article>
}

export interface DeleteArticleRepository {
  deleteArticle: (id: number) => Promise<void>
}

export interface ListArticlesRepository {
  listArticles: (page: number, pageSize: number) => Promise<Article[]>
}

export interface GetArticleRepository {
  getArticle: (id: number) => Promise<Article>
}
