import React from "react";
import "./Categories.css";
import { useCategoriesContext } from "../../contexts/categories";

const Categories: React.FC = () => {
  const { categories, error, isLoading } = useCategoriesContext();
  return (
    <div className="categories">
      {isLoading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      {categories &&
        !isLoading &&
        !error &&
        categories.map((category) => (
          <div key={category.id} className="category-item">
            {category.name}
          </div>
        ))}
    </div>
  );
};

export default Categories;
