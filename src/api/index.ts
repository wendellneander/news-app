import express from "express"
import bodyParser from "body-parser"
import GetArticleControllerFactory from "./src/entrypoints/get-article-controller-factory"
import ListArticlesControllerFactory from "./src/entrypoints/list-articles-controller-factory"
import CreateArticleControllerFactory from "./src/entrypoints/create-article-controller-factory"
import UpdateArticleControllerFactory from "./src/entrypoints/update-article-controller-factory"
import DeleteArticleControllerFactory from "./src/entrypoints/delete-article-controller-factory"

const app = express()
const port = process.env.API_PORT

app.use(bodyParser.json())

const listArticlesController = ListArticlesControllerFactory.create()
const getArticleController = GetArticleControllerFactory.create()
const createArticleController = CreateArticleControllerFactory.create()
const updateArticleController = UpdateArticleControllerFactory.create()
const deleteArticleController = DeleteArticleControllerFactory.create()

app.get("/articles", listArticlesController.handle)
app.get("/article/:id", getArticleController.handle)
app.post("/article", createArticleController.handle)
app.patch("/article/:id", updateArticleController.handle)
app.delete("/article/:id", deleteArticleController.handle)

app.get("/", (_req, res) => res.status(200).send())

app.listen(port, () => {
  console.log(`Api is running at http://localhost:${port}`)
})
