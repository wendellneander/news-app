import React from "react";
import Categories from "../../components/categories";
import Header from "../../components/header";
import ArticleForm from "../../components/article-form";
import useSWRMutation from "swr/mutation";
import axios from "../../plugins/axios";
import Article from "../../types/article";
import { useNavigate } from "react-router-dom";
import "./CreateArticlePage.css";

interface CreateArticleData {
  title: string;
  content: string;
  categoryId: number | null;
  authorId: number | null;
}

async function createArticleRequest(
  url: string,
  { arg }: { arg: CreateArticleData }
) {
  await axios.post<Article>(url, arg);
}

const CreateArticlePage: React.FC = () => {
  const navigate = useNavigate();
  const url = `/article`;
  const { trigger, isMutating, error } = useSWRMutation(
    url,
    createArticleRequest
  );

  const onSubmit = async (data: CreateArticleData) => {
    await trigger(data);

    navigate("/");
  };

  return (
    <>
      <Header />
      <Categories />
      <ArticleForm
        error={error}
        isLoading={isMutating}
        onSubmit={onSubmit}
        submitText="Create Article"
      />
    </>
  );
};

export default CreateArticlePage;
