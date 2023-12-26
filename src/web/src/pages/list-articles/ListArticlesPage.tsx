import React from "react";
import Header from "../../components/header";
import Categories from "../../components/categories";
import ArticlesGrid from "../../components/articles-grid";
import { useArticlesContext } from "../../contexts/articles";

const ListArticlesPage: React.FC = () => {
  const { articles, isLoading, error } = useArticlesContext();

  return (
    <>
      <Header />
      <Categories />
      {isLoading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      {!isLoading && !error && <ArticlesGrid articles={articles} />}
    </>
  );
};

export default ListArticlesPage;
