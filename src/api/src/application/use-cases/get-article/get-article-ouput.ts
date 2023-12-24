export default interface GetArticleOutput {
  id: number | undefined
  title: string
  content: string
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
