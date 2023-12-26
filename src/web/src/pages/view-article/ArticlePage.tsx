import React from "react";
import Header from "../../components/header";
import Categories from "../../components/categories";
import "./ArticlePage.css";

const ArticlePage: React.FC = () => {
  return (
    <>
      <Header />
      <Categories />

      <div className="article">
        <h2 className="article-title">Title</h2>
        <div className="article-meta">
          <p className="author">Por Author</p>
          <p className="date">createdAt</p>
        </div>
        <p className="article-content">Content</p>
      </div>
    </>
  );
};

export default ArticlePage;
