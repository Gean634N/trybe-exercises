import React from "react";
import Pokemon from "./Pokemon";

class Pokedex extends React.Component {
    render() {
        const data = this.props.data;
        return (
            <div>
                {data.map((pokemon) => <Pokemon key = {pokemon.id} pokemonData = {pokemon}/>) }
            </div>
        )
    }
};

export default Pokedex;