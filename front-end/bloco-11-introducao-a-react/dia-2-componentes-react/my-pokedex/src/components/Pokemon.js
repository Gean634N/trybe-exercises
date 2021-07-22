import React from "react";
import '../App.css';


class Pokemon extends React.Component {
    render() {
        const {name, type, averageWeight, image} = this.props.pokemonData;
        return (
            <div className = "Pokemon">
                <ul>
                    <li>{name}</li>
                    <li>{type}</li>
                    <li>{averageWeight.value} {averageWeight.measurementUnit}</li>
                </ul>
                <img src = {image} alt = {name}></img>
            </div>
        )    
    }
}

export default Pokemon;