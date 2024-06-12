import React from "react";
import "./Header.scss";
import TicTac from "../../../public/tic-tac-toe.jpeg";

function Header() {
  return (
    <div className="header">
      <div className="header__nav">
        <div className="header__player1">
          <p>Player 1</p>
        </div>
        <img className="header__img header__blink-me" src={TicTac}></img>
        <div className="header__player2">
          <p>Player 2</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
