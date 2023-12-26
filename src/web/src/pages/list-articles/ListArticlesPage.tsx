import React from "react";
import Header from "../../components/header";
import Categories from "../../components/categories";
import ArticlesGrid from "../../components/articles-grid";

const ListArticlesPage: React.FC = () => {
  return (
    <>
      <Header />
      <Categories />
      <ArticlesGrid />
    </>
  );
};

export default ListArticlesPage;
