import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({  setPokes, pokes, handlenNewPokeSubmit }) {

  function handleFormSubmit(e) {
    e.preventDefault();
    e.persist();
    const formPoke = {
      name: e.target['name'].value,
      hp: e.target['hp'].value,
    }
    const sprites = {
      front: e.target['front'].value,
      back: e.target['back'].value
    }
    const newPoke = ({...formPoke, sprites})
    setPokes([...pokes, newPoke])
    
    fetch(`http://localhost:3001/pokemon/`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPoke),
    })
    .then(res => res.json())
    .then(data => setPokes([...pokes, newPoke]))
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleFormSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input 
            fluid label="Name"
            placeholder="Name" 
            name="name" />
          <Form.Input 
            fluid label="hp" 
            placeholder="hp" 
            name="hp" />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="front"/>
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="back"/>
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
