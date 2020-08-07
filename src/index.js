import React from "react";
import ReactDOM from "react-dom";

import data from "./data.json";
import "./styles.css";
import Board from "react-trello";

const cardTypeOrderMap = {
  evaluator: 1,
  divider: 2,
  submission: 3
};

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
  return true; //allow drop//write custom logic to cancel dropping
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
          if (cardTypeOrderMap[card1.type] < cardTypeOrderMap[card2.type])
            return -1;
          else if (cardTypeOrderMap[card1.type] > cardTypeOrderMap[card2.type])
            return 1;
          else {
            if (card1.id < card2.id) return -1;
            else return 1;
          }
        }}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
