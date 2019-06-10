import React from "react";

import RowItem from "./row-item";

export default ({ items }) => {
  return (
    <div className="card__row">
      {items.map(item => (
        <RowItem {...item} />
      ))}
    </div>
  );
};
