import React, { useState } from "react";
import "./CreateArticlePage.css";
import Categories from "../../components/categories";
import Header from "../../components/header";
import ArticleForm from "../../components/article-form";
import useSWRMutation from "swr/mutation";

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
  await fetch(url, {
    method: "POST",
    body: JSON.stringify(arg),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((e) => {
      console.log("ERROR asdasd: ", e);
    });
}

const CreateArticlePage: React.FC = () => {
  const url = `http://localhost:3001/article`;
  const [createError] = useState();
  const { trigger, isMutating, error } = useSWRMutation(
    url,
    createArticleRequest
  );

  const onSubmit = async (data: CreateArticleData) => {
    await trigger(data);
  };

  return (
    <>
      <Header />
      <Categories />
      <ArticleForm
        error={error || createError}
        isLoading={isMutating}
        onSubmit={onSubmit}
      />
    </>
  );
};

export default CreateArticlePage;
