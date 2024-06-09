import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Accueil = () => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=20");
        setPokemonList(response.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchPokemonList();
  }, []);

  return (
    <div className="pokemon-grid">
      <h2>Liste de Pokémon</h2>
      <div className="grid-container">
        {pokemonList.map((pokemon, index) => (
          <div key={index} className="pokemon-item">
            <Link to={`/pokem/${index + 1}`}>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
                alt={pokemon.name}
              />
              <p>{pokemon.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accueil;
