import React from "react";
import "./main.scss";
import { useState } from "react";
import axios from "axios";

function Main() {
  const [tictacArr, setTictacArr] = useState([
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
  ]);
  const [playerTurn, setPlayerTurn] = useState(true);

  async function clickHandler(e) {
    e.preventDefault();
    console.log(e.target.id);
    tictacArr[e.target.id] = playerTurn;
    setPlayerTurn(!playerTurn);
    const temp = [...tictacArr];
    setTictacArr(temp);

    const response = await axios.post("http://localhost:8080/game", {
      board: tictacArr,
    });
    console.log(response.data.status);
    console.log(response.data.winner);
    if (response.data.winner === true) {
      alert("X won");
    } else if (response.data.winner === false) {
      alert("O won");
    }
  }

  function renderGrid() {
    const gridItems = [];
    for (let i = 0; i < 9; i++) {
      gridItems.push(
        <div key={i} className="main__little-wrapper">
          {/* {console.log(tictacArr[i])} */}
          {tictacArr[i] !== " " ? (
            <div className="main__buttons" id={`${i}`}>
              {tictacArr[i] === true ? "X" : "O"}
            </div>
          ) : (
            <div
              className="main__buttons"
              onClick={clickHandler}
              id={`${i}`}
            ></div>
          )}
        </div>
      );
    }
    return gridItems;
  }

  return (
    <>
      <div className="main">
        <form className="main__big-wrapper">{renderGrid()}</form>
      </div>
    </>
  );
}

export default Main;
