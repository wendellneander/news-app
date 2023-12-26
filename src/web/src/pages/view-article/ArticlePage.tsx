import React from "react";
import Header from "../../components/header";
import Categories from "../../components/categories";
import useSWR from "swr";
import { useNavigate, useParams } from "react-router-dom";
import useSWRMutation from "swr/mutation";
import "./ArticlePage.css";

async function deleteArticle(url: string) {
  await fetch(url, {
    method: "DELETE",
  });
}

const ArticlePage: React.FC = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const url = `http://localhost:3001/article/${slug}`;

  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR(url, fetcher);
  const { trigger, isMutating } = useSWRMutation(url, deleteArticle);

  const handleDelete = () => {
    const response = confirm("Are you sure, you want to delete this article?");
    if (response) {
      trigger();
      navigate("/");
    }
  };

  return (
    <>
      <Header />
      <Categories />

      {isLoading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}

      {!isLoading && !error && (
        <div className="article">
          <h2 className="article-title">{data.title}</h2>
          <div className="article-meta">
            <p className="author">By {data.author.name}</p>
            <p className="date">{data.createdAt}</p>
          </div>
          <p className="article-content">{data.content}</p>

          <div className="actions">
            <button onClick={() => navigate(`/article/${data.id}/edit`)}>
              Edit
            </button>
            <button disabled={isMutating} onClick={handleDelete}>
              {isMutating ? "Deleting..." : "Delete"}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ArticlePage;
