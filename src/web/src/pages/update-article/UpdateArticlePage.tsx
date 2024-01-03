import React from "react";
import Categories from "../../components/categories";
import Header from "../../components/header";
import ArticleForm from "../../components/article-form";
import useSWRMutation from "swr/mutation";
import axios from "../../plugins/axios";
import Article from "../../types/article";
import { useNavigate, useParams } from "react-router-dom";
import "./UpdateArticlePage.css";
import useSWR from "swr";

interface UpdateArticleData {
  title: string;
  content: string;
  categoryId: number | null;
  authorId: number | null;
}

async function updateArticleRequest(
  url: string,
  { arg }: { arg: UpdateArticleData }
) {
  await axios.patch<Article>(url, arg);
}

const getArticleRequest = (url: string) => axios.get<Article>(url);

const UpdateArticlePage: React.FC = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const { trigger, isMutating, error } = useSWRMutation(
    `/article/${slug}`,
    updateArticleRequest
  );

  const {
    data: getaArticleResponse,
    error: getArticleError,
    isLoading: isGetArticleLoading,
  } = useSWR(`/article/${slug}`, getArticleRequest);

  const onSubmit = async (data: UpdateArticleData) => {
    const response = await trigger(data);
    console.log("response", response);

    navigate("/");
  };

  return (
    <>
      <Header />
      <Categories />
      {isGetArticleLoading && !error && <p>Loading...</p>}
      {getArticleError && <p className="error">{getArticleError.message}</p>}
      {!isGetArticleLoading && (
        <ArticleForm
          article={getaArticleResponse?.data}
          error={error}
          isLoading={isMutating}
          onSubmit={onSubmit}
          submitText="Update Article"
        />
      )}
    </>
  );
};

export default UpdateArticlePage;
