import React from "react";
import { useState } from "react";
import Header from "../Header/Header";

function main() {
  function handleClick(id) {
    console.log("I have been clicked");
  }
  return (
    <>
      <Header />
      <div className="main">
        <form className="main__big-wrapper" onClick={handleClick}>
          <div className="main__little-wrapper">
            <div className="main__buttons" id="box1"></div>
          </div>
        </form>
      </div>
    </>
  );
}

export default main;
