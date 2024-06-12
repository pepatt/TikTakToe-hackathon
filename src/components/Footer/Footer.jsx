import React from "react";
import "./Footer.scss";
import TicTac from "../../../public/tic-tac-toe.jpeg";

function Footer() {
  return (
    <div className="footer">
      <img className="footer__img footer__blink-me" src={TicTac}></img>
      <div className="footer__items">
        <div className="footer__left">
          <p className="footer__x">X</p>
        </div>

        <div className="footer__right">
          <p className="footer__o">O</p>
        </div>
      </div>
      <img className="footer__img footer__blink-me" src={TicTac}></img>
    </div>
  );
}

export default Footer;
