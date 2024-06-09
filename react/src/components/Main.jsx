// Main.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';  
import Accueil from "../pages/Accueil";
import Blog from "../pages/PageFormulaire";
import Information from "../pages/Information";
import PokemDetails from "./PokemDetails";
import PagePokem from "../pages/PagePokem";
import Pokem from './Pokem';

const Main = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Accueil />} />
                <Route path="/Formulaire" element={<Blog />} />
                <Route path="/Information" element={<Information />} />
                <Route path="/pokem/:id" element={<Pokem />} />
                <Route path="/pokem" element={<PagePokem />} />

            </Routes>
        </main>
    );
};

export default Main;
