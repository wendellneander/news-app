/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useMemo } from "react";
import Article from "../../types/article";
import useSWR from "swr";
import axios from "../../plugins/axios";

interface ArticlesContextProps {
  articles: Article[];
  error: TypeError;
  isLoading: boolean;
}

interface GetArticlesResponse {
  articles: Article[];
}

const ArticlesContext = createContext<ArticlesContextProps>(
  {} as ArticlesContextProps
);

const fetcher = (url: string) => axios.get<GetArticlesResponse>(url);

const ArticlesProvider = ({ children }: { children: React.ReactNode }) => {
  const { data, error, isLoading } = useSWR(
    `/articles?page=0&pageSize=100`,
    fetcher,
    { errorRetryCount: 3, revalidateOnFocus: true, refreshInterval: 5000 }
  );
  const value = useMemo(
    () => ({ articles: data?.data.articles || [], error, isLoading }),
    [data, error, isLoading]
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
