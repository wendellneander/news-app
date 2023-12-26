import React from "react";
import Sidebar from "../sidebar";
import { useNavigate } from "react-router-dom";
import { useSidebarContext } from "../../contexts/sidebar";
import "./Header.css";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const { toggleSidebar } = useSidebarContext();

  return (
    <>
      <Sidebar />
      <header className="header">
        <button onClick={toggleSidebar}>
          <span className="material-symbols-outlined">menu</span>
        </button>
        <h1 className="app-title">
          <a href="/">The News</a>
        </h1>
        <button onClick={() => navigate("/article/create")}>
          <span className="material-symbols-outlined">add</span>
        </button>
      </header>
    </>
  );
};

export default Header;
