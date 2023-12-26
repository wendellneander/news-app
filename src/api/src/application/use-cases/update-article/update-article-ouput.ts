export default interface UpdateArticleOutput {
  id: number | undefined
  title: string
  content: string
  slug: string
  category: {
    id: number | undefined
    name: string
  }
  author: {
    id: number | undefined
    name: string
  }
  createdAt: string | undefined
}
