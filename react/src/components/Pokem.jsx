import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';

const Pokem = () => {
  const [pokemon, setPokemon] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchPokem = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        setPokemon(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchPokem();
  }, [id]);

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  return (
    <div className="Bloup2">
      <h2 className="Bloup3">{pokemon.name}</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} className="Bloup4"/>
      <h3 className="Bloup">Types:</h3>
      <ul className="Bloup5">
        {pokemon.types.map((type, index) => (
          <li key={index}>{type.type.name}</li>
        ))}
      </ul>
      <h3 className="Bloup">Abilities:</h3>
      <ul className="Bloup5">
        {pokemon.abilities.map((ability, index) => (
          <li key={index}>{ability.ability.name}</li>
        ))}
      </ul>
      <h3 className="Bloup">Stats:</h3>
      <ul className="Bloup5">
        {pokemon.stats.map((stat, index) => (
          <li key={index}>{stat.stat.name}: {stat.base_stat}</li>
        ))}
      </ul>
    </div>

   

  );
};

export default Pokem;
