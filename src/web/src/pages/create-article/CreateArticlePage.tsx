import React from "react";
import "./CreateArticlePage.css";
import Categories from "../../components/categories";
import Header from "../../components/header";

const CreateArticlePage: React.FC = () => {
  return (
    <>
      <Header />
      <Categories />

      <p>CreateArticlePage</p>
    </>
  );
};

export default CreateArticlePage;
