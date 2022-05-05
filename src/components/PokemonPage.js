import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokes, setPokes] = useState([])
  const [searchedPoke, setSearchedPoke] = useState('')
  const baseURL = 'http://localhost:3001/pokemon'

  function getFetch() {
    fetch(baseURL)
      .then(res => res.json())
      .then(data => setPokes(data))
  }

  useEffect(() => {
    getFetch();
  }, [])

  function handleSearch(e) {
    setSearchedPoke(e.target.value)
  }

  function handlenNewPokeSubmit(newPoke) {
    console.log([newPoke])
  }

  const pokesToDisplay = pokes
  .filter((poke) => {
    if(poke.name.toLowerCase().includes(searchedPoke.toLowerCase())){
      return poke
    }else {
      return null
    }
  })

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm  
        pokes={pokes} 
        setPokes={setPokes}
        handlenNewPokeSubmit={handlenNewPokeSubmit}
         />
      <br />
      <Search handleSearch={handleSearch} />
      <br />
      <PokemonCollection pokes={pokesToDisplay} />
    </Container>
  );
}

export default PokemonPage;
