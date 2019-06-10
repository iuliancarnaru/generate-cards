import React from "react";

export default ({ icon, pos }) => (
  <span className={`card__icon card__icon--${pos}`}>{icon}</span>
);
