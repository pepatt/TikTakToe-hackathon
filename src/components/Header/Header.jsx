import React from "react";
import "./Header.scss";
import TicTac from "../../../public/tic-tac-toe.jpeg";

function Header({ playerTurn }) {
  console.log(playerTurn);
  function turnDisplayTrue() {
    if(playerTurn === true) {
      return (
        <img className="header__img-2" src={TicTac}></img>
      );
    } else if (playerTurn === false) {
      <img className="header__img-2" src={TicTac}></img>
    }
  }

  function turnDisplayFalse() {
    if(playerTurn === false) {
      return (
        <img className="header__img-2" src={TicTac}></img>
      );
    } else if (playerTurn === true) {
    }
  }

  return (
    <div className="header">
      <div className="header__nav">
        <div className="header__player1">
          <p>Player X</p>
          {turnDisplayTrue()}
        </div>
        {/* <img className="header__img header__blink-me" src={TicTac}></img> */}
        <div className="header__player2">
          <p>Player O</p>
          {turnDisplayFalse()}
        </div>
      </div>
    </div>
  );
}

export default Header;
