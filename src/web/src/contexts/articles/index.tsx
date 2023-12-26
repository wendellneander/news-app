/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useMemo } from "react";
import Article from "../../types/article";
import useSWR from "swr";

interface ArticlesContextProps {
  articles: Article[];
  error: TypeError;
  isLoading: boolean;
}

const ArticlesContext = createContext<ArticlesContextProps>(
  {} as ArticlesContextProps
);

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const ArticlesProvider = ({ children }: { children: React.ReactNode }) => {
  const { data, error, isLoading } = useSWR(
    `http://localhost:3001/articles?page=0&pageSize=100`,
    fetcher
  );
  const value = useMemo(
    () => ({ articles: data?.articles || [], error, isLoading }),
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
