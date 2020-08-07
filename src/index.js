import React from "react";
import ReactDOM from "react-dom";

import data from "./data.json";
import "./styles.css";
import Board from "react-trello";

function handleDragEnd(
  cardId,
  sourceLaneId,
  targetLaneId,
  position,
  cardDetails
) {
  console.log(
    "cardId -",
    cardId,
    "courceLaneId -",
    sourceLaneId,
    "targetLaneId -",
    targetLaneId,
    "position -",
    position,
    "cardDetails - ",
    cardDetails
  );
  return true;
}

function App() {
  return (
    <div className="App">
      <h1>react-trello demo</h1>
      <Board
        data={data}
        draggable
        hideCardDeleteIcon
        canAddLanes
        handleDragEnd={handleDragEnd}
        laneSortFunction={(card1, card2) => {
          return card1.id < card2.id ? -1 : 1;
        }}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
