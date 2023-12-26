import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <header className="header">
        <button onClick={() => {}}>
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
