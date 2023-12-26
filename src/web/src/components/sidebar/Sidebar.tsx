import React, { useState } from "react";
import "./Sidebar.css";

const Sidebar: React.FC = () => {
  const categories = ["Política", "Esportes", "Entretenimento", "Tecnologia"];
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

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
