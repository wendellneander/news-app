import { createBrowserRouter } from "react-router-dom";
import ListArticlesPage from "../pages/list-articles";
import ArticlePage from "../pages/view-article";
import UpdateArticlePage from "../pages/update-article";
import CreateArticlePage from "../pages/create-article";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ListArticlesPage />,
  },
  {
    path: "/article/create",
    element: <CreateArticlePage />,
  },
  {
    path: "/article/:slug/edit",
    element: <UpdateArticlePage />,
  },
  {
    path: "/article/:slug",
    element: <ArticlePage />,
  },
]);

export default router;
