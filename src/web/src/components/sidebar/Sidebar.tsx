import React, { useContext } from "react";
import { SidebarContext } from "../../contexts/sidebar";
import "./Sidebar.css";

const Sidebar: React.FC = () => {
  const { showSidebar, toggleSidebar } = useContext(SidebarContext);
  const categories = ["Política", "Esportes", "Entretenimento", "Tecnologia"];

  return (
    <div>
      <div className={`sidebar ${showSidebar ? "show" : ""}`}>
        <button onClick={toggleSidebar}>
          <span className="material-symbols-outlined">close</span>
        </button>
        <ul>
          {categories.map((category, index) => (
            <li key={index} className="sidebar-item">
              {category}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
