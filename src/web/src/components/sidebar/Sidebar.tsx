import React, { useContext } from "react";
import { SidebarContext } from "../../contexts/sidebar";
import { useCategoriesContext } from "../../contexts/categories";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";

const Sidebar: React.FC = () => {
  const { showSidebar, toggleSidebar } = useContext(SidebarContext);
  const { categories, error, isLoading } = useCategoriesContext();
  const navigate = useNavigate();
  return (
    <div>
      <div className={`sidebar ${showSidebar ? "show" : ""}`}>
        <button onClick={toggleSidebar}>
          <span className="material-symbols-outlined">close</span>
        </button>
        <ul>
          {isLoading && <p>Loading...</p>}
          {error && <p className="error">{error.message}</p>}
          {categories &&
            !isLoading &&
            !error &&
            categories.map((category) => (
              <li
                onClick={() => navigate(`/?categoryId=${category.id}`)}
                key={category.id}
                className="sidebar-item"
              >
                {category.name}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
