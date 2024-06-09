import React from "react";
import { Routes, NavLink  } from "react-router-dom";

const Header = () => {
    return (
        <header>
  <div class="header">
  <NavLink to="/" className="logo">React DM</NavLink>
  <div class="header-right">
    <NavLink to="/Formulaire">Formulaire</NavLink>
    <NavLink to="/">Accueil</NavLink>
    <NavLink to="/Information">Information</NavLink>
  </div>
</div>
        </header>
    )
};

export default Header;