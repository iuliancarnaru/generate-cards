import React from "react";
import ReactDOM from "react-dom";

import CardList from "./card-list";
import "./styles.css";
import data from "./card-data.json";

function App() {
  return (
    <div className="App">
      <CardList cards={data} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
