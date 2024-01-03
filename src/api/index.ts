import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import GetArticleControllerFactory from "./src/entrypoints/get-article-controller-factory"
import ListArticlesControllerFactory from "./src/entrypoints/list-articles-controller-factory"
import CreateArticleControllerFactory from "./src/entrypoints/create-article-controller-factory"
import UpdateArticleControllerFactory from "./src/entrypoints/update-article-controller-factory"
import DeleteArticleControllerFactory from "./src/entrypoints/delete-article-controller-factory"
import ListCategoriesControllerFactory from "./src/entrypoints/list-categories-controller-factory"

const app = express()
const port = process.env.API_PORT

app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
)
app.use(bodyParser.json())

const listArticlesController = ListArticlesControllerFactory.create()
const getArticleController = GetArticleControllerFactory.create()
const createArticleController = CreateArticleControllerFactory.create()
const updateArticleController = UpdateArticleControllerFactory.create()
const deleteArticleController = DeleteArticleControllerFactory.create()
const listCategoriesController = ListCategoriesControllerFactory.create()

app.patch("/article/:slug", updateArticleController.handle)
app.delete("/article/:slug", deleteArticleController.handle)
app.post("/article", createArticleController.handle)
app.get("/categories", listCategoriesController.handle)
app.get("/articles", listArticlesController.handle)
app.get("/article/:slug", getArticleController.handle)

app.get("/", (_req, res) => res.status(200).send())

app.listen(port, () => {
  console.log(`Api is running at http://localhost:${port}`)
})
