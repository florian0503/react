import React, { Component } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';

class Pokem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: null
    };
  }

  componentDidMount() {
    const { id } = useParams();
    this.fetchPokem(id);
  }

  fetchPokem = async (id) => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      this.setState({ pokemon: response.data });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  render() {
    const { pokemon } = this.state;

    if (!pokemon) {
      return <div className="loading">Loading...</div>;
    }

    return (
      <div className="pokemon-details">
        <h2 className="pokemon-name">{pokemon.name}</h2>
        <img className="pokemon-image" src={pokemon.sprites.front_default} alt={pokemon.name} />
        <h3 className="pokemon-types-title">Types:</h3>
        <ul className="pokemon-types">
          {pokemon.types.map((type, index) => (
            <li key={index} className="pokemon-type">{type.type.name}</li>
          ))}
        </ul>
        <h3 className="pokemon-abilities-title">Abilities:</h3>
        <ul className="pokemon-abilities">
          {pokemon.abilities.map((ability, index) => (
            <li key={index} className="pokemon-ability">{ability.ability.name}</li>
          ))}
        </ul>
        <h3 className="pokemon-stats-title">Stats:</h3>
        <ul className="pokemon-stats">
          {pokemon.stats.map((stat, index) => (
            <li key={index} className="pokemon-stat">{stat.stat.name}: {stat.base_stat}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Pokem;
