import React from "react";

import Card from "./card";

export default ({ cards }) => (
  <div className="card-list">
    {cards.map(card => (
      <Card {...card} />
    ))}
  </div>
);
