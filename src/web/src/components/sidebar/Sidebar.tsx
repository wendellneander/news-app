import React, { useContext } from "react";
import { SidebarContext } from "../../contexts/sidebar";
import "./Sidebar.css";
import { useCategoriesContext } from "../../contexts/categories";

const Sidebar: React.FC = () => {
  const { showSidebar, toggleSidebar } = useContext(SidebarContext);
  const { categories, error, isLoading } = useCategoriesContext();

  return (
    <div>
      <div className={`sidebar ${showSidebar ? "show" : ""}`}>
        <button onClick={toggleSidebar}>
          <span className="material-symbols-outlined">close</span>
        </button>
        <ul>
          {isLoading && <p>Loading...</p>}
          {error && <p>{error.message}</p>}
          {categories &&
            !isLoading &&
            !error &&
            categories.map((category) => (
              <li key={category.id} className="sidebar-item">
                {category.name}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
