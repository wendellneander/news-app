import express, { Request, Response } from "express"
import CreateArticleControllerFactory from "./src/entrypoints/create-article-controller-factory"
import DeleteArticleControllerFactory from "./src/entrypoints/delete-article-controller-factory"
import GetArticleControllerFactory from "./src/entrypoints/get-article-controller-factory"

const app = express()
const port = process.env.API_PORT

const createArticleController = CreateArticleControllerFactory.create()
const deleteArticleController = DeleteArticleControllerFactory.create()
const getArticleController = GetArticleControllerFactory.create()

app.post("/article", createArticleController.handle)
app.delete("/article/:id", deleteArticleController.handle)
app.get("/article/:id", getArticleController.handle)

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, world!")
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})
