import React from "react";
import "./Header.scss";

function Header() {
  return (
    <div className="header">
      Header
      <div className="header__nav">
        <div className="header__player1">
          <p>Player 1:</p>
        </div>
        <div>
          <p>Player 2:</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
