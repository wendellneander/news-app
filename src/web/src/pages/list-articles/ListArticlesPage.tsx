import React from "react";
import Header from "../../components/header";
import Categories from "../../components/categories";
import ArticlesGrid from "../../components/articles-grid";
import Sidebar from "../../components/sidebar";

const ListArticlesPage: React.FC = () => {
  return (
    <>
      <Sidebar />
      <Header />
      <Categories />
      <ArticlesGrid />
    </>
  );
};

export default ListArticlesPage;
