/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useMemo, useState } from "react";
import Article from "../../types/article";
import useSWR from "swr";
import axios from "../../plugins/axios";

interface ArticlesContextProps {
  articles: Article[];
  error: TypeError;
  isLoading: boolean;
  categoryId?: string;
  setCategoryId: (id: string) => void;
}

interface GetArticlesResponse {
  articles: Article[];
}

const ArticlesContext = createContext<ArticlesContextProps>({
  articles: [],
  error: {} as TypeError,
  isLoading: false,
  setCategoryId: (id: string) => id,
});

const fetcher = (url: string) => axios.get<GetArticlesResponse>(url);

const ArticlesProvider = ({ children }: { children: React.ReactNode }) => {
  const [categoryId, setCategoryId] = useState<string | undefined>();
  const { data, error, isLoading } = useSWR(
    `/articles?page=0&pageSize=100${
      categoryId ? `&categoryId=${categoryId}` : ""
    }`,
    fetcher,
    { errorRetryCount: 3, revalidateOnFocus: true, refreshInterval: 5000 }
  );

  const value = useMemo(
    () => ({
      articles: data?.data.articles || [],
      error,
      isLoading,
      categoryId,
      setCategoryId,
    }),
    [data, error, isLoading, categoryId]
  );

  return (
    <ArticlesContext.Provider value={value}>
      {children}
    </ArticlesContext.Provider>
  );
};

const useArticlesContext = () => {
  return useContext(ArticlesContext);
};
export { ArticlesContext, ArticlesProvider, useArticlesContext };
