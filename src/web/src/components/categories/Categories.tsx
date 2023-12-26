import React from "react";
import "./Categories.css";

const Categories: React.FC = () => {
  const categories = ["Política", "Esportes", "Entretenimento", "Tecnologia"];

  return (
    <div className="categories">
      {categories.map((category, index) => (
        <div key={index} className="category-item">
          {category}
        </div>
      ))}
    </div>
  );
};

export default Categories;
