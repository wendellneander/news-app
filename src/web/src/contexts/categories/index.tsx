/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useMemo } from "react";
import Category from "../../types/category";
import useSWR from "swr";

interface CategoriesContextProps {
  categories: Category[];
  error: TypeError;
  isLoading: boolean;
}

const CategoriesContext = createContext<CategoriesContextProps>(
  {} as CategoriesContextProps
);

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const CategoriesProvider = ({ children }: { children: React.ReactNode }) => {
  const { data, error, isLoading } = useSWR(
    `http://localhost:3001/categories?page=0&pageSize=100`,
    fetcher,
    { errorRetryCount: 3 }
  );
  const value = useMemo(
    () => ({ categories: data?.categories || [], error, isLoading }),
    [data, error, isLoading]
  );

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};

const useCategoriesContext = () => {
  return useContext(CategoriesContext);
};

export { CategoriesContext, CategoriesProvider, useCategoriesContext };
