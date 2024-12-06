import { useEffect, useState } from "react";
import axios from "axios";

const PokeCard = ({ url, name }) => {
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    fetchPokeDetailData(url);
  }, [url]);

  async function fetchPokeDetailData(url) {
    try {
      const response = await axios.get(url);
      const pokemonData = formatPokemonData(response.data);
      setPokemon(pokemonData);
    } catch (error) {
      console.log(error);
    }
  }

  function formatPokemonData(params) {
    const { id, types, name } = params;
    const pokeData = {
      id,
      name,
      type: types[0].type.name,
    };
    return pokeData;
  }

  return <div>PokeCard</div>;
};

export default PokeCard;
