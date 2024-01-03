import React from "react";
import "./Categories.css";
import { useCategoriesContext } from "../../contexts/categories";
import { useNavigate } from "react-router-dom";

const Categories: React.FC = () => {
  const { categories, error, isLoading } = useCategoriesContext();
  const navigate = useNavigate();
  return (
    <div className="categories">
      {isLoading && <p>Loading...</p>}
      {error && <p className="error">{error.message}</p>}
      {categories &&
        !isLoading &&
        !error &&
        categories.map((category) => (
          <div
            onClick={() => navigate(`/?categoryId=${category.id}`)}
            key={category.id}
            className="category-item"
          >
            {category.name}
          </div>
        ))}
    </div>
  );
};

export default Categories;
