import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ poke }) {
  const { hp, id, name, sprites } = poke
  const [front, setFront] = useState(true)

  function handleImage() {
    setFront(!front)
  }
  return (
    <Card>
      <div>
        <div className="image" key={id}>
          {
          front ?
          <img onClick={handleImage} src={sprites.front} alt="front" />
          : 
          <img onClick={handleImage} src={sprites.back} alt="back" />
          }
        </div>
          
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
