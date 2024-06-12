import React from "react";
import "./Main.scss";
import { useState } from "react";

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

  function clickHandler(e) {
    e.preventDefault();
    console.log(e.target.id);
    tictacArr[e.target.id] = playerTurn;
    setPlayerTurn(!playerTurn);
    const temp = [...tictacArr];
    setTictacArr(temp);
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
            <div className="main__buttons" id={`${i}`}></div>
          )}
        </div>
      );
    }
    return gridItems;
  }

  return (
    <>
      <div className="main">
        <form className="main__big-wrapper" onClick={clickHandler}>
          {renderGrid()}
        </form>
      </div>
    </>
  );
}

export default Main;
