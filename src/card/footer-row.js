import React from "react";

import RowItem from "./row-item";

export default ({ items }) => (
  <div className="card__row card__row--footer">
    {items.map(item => (
      <RowItem {...item} />
    ))}
  </div>
);
