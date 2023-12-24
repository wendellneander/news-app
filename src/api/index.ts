import express, { Request, Response } from "express"
import GetArticleControllerFactory from "./src/entrypoints/get-article-controller-factory"
import ListArticlesControllerFactory from "./src/entrypoints/list-articles-controller-factory"
import CreateArticleControllerFactory from "./src/entrypoints/create-article-controller-factory"
import DeleteArticleControllerFactory from "./src/entrypoints/delete-article-controller-factory"

const app = express()
const port = process.env.API_PORT

const createArticleController = CreateArticleControllerFactory.create()
const deleteArticleController = DeleteArticleControllerFactory.create()
const getArticleController = GetArticleControllerFactory.create()
const listArticlesController = ListArticlesControllerFactory.create()

app.get("/article", listArticlesController.handle)
app.get("/article/:id", getArticleController.handle)
app.post("/article", createArticleController.handle)
app.delete("/article/:id", deleteArticleController.handle)

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, world!")
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})
