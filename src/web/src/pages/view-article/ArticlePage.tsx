import React from "react";
import Header from "../../components/header";
import Categories from "../../components/categories";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../../plugins/axios";
import "./ArticlePage.css";
import Article from "../../types/article";

async function deleteArticle(url: string) {
  await fetch(url, {
    method: "DELETE",
  });
}

const CURRENT_AUTHOR_ID = 1;

const ArticlePage: React.FC = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const url = `/article/${slug}`;

  const fetcher = (url: string) => axios.get<Article>(url);
  const { data, error, isLoading } = useSWR(url, fetcher);
  const { trigger, isMutating } = useSWRMutation(url, deleteArticle);

  const handleDelete = async () => {
    const response = confirm("Are you sure, you want to delete this article?");
    if (response) {
      await trigger();
      navigate("/");
    }
  };

  return (
    <>
      <Header />
      <Categories />

      {isLoading && <p>Loading...</p>}
      {error && <p className="error">{error.message}</p>}

      {!isLoading && !error && (
        <div className="article">
          <h2 className="article-title">{data?.data.title}</h2>
          <div className="article-meta">
            <p className="author">By {data?.data.author.name}</p>
            <p className="date">{data?.data.createdAt}</p>
          </div>
          <p className="article-content">{data?.data.content}</p>

          {data?.data.author.id === CURRENT_AUTHOR_ID && (
            <div className="actions">
              <button
                onClick={() => navigate(`/article/${data?.data.slug}/edit`)}
              >
                Edit
              </button>
              <button disabled={isMutating} onClick={handleDelete}>
                {isMutating ? "Deleting..." : "Delete"}
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ArticlePage;
