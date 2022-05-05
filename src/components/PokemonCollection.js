import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokes }) {
  return (
    <Card.Group itemsPerRow={6} >
      {pokes.map((poke) => {
        return <PokemonCard key={poke.id} id={poke.id} poke={poke}/>
      })}
      <h1>Hello From Pokemon Collection</h1>
    </Card.Group>
  );
}

export default PokemonCollection;
