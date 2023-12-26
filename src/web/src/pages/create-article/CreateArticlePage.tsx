import React from "react";
import "./CreateArticlePage.css";
import Categories from "../../components/categories";
import Header from "../../components/header";
import ArticleForm from "../../components/article-form";

const CreateArticlePage: React.FC = () => {
  return (
    <>
      <Header />
      <Categories />

      <ArticleForm onSubmit={() => {}} />
    </>
  );
};

export default CreateArticlePage;
