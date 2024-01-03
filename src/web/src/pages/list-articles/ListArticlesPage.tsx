import React from "react";
import Header from "../../components/header";
import Categories from "../../components/categories";
import ArticlesGrid from "../../components/articles-grid";
import { useArticlesContext } from "../../contexts/articles";
import { useLocation } from "react-router-dom";

const useQuery = () => {
  const search = useLocation().search;
  return new URLSearchParams(search);
};

const ListArticlesPage: React.FC = () => {
  const query = useQuery();
  const categoryId = query.get("categoryId");
  const { articles, isLoading, error, setCategoryId } = useArticlesContext();
  setCategoryId(categoryId || "");

  return (
    <>
      <Header />
      <Categories />
      {isLoading && <p>Loading...</p>}
      {error && <p className="error">{error.message}</p>}
      {!isLoading && !error && <ArticlesGrid articles={articles} />}
    </>
  );
};

export default ListArticlesPage;
