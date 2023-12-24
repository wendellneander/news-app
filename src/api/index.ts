import express, { Request, Response } from "express"
import CreateArticleControllerFactory from './src/entrypoints/create-article-controller-factory'

const app = express()
const port = process.env.API_PORT

const createArticleController = CreateArticleControllerFactory.create()

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, world!")
})

app.post("/article", createArticleController.handle)

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})
