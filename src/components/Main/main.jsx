import React from "react";
import { useState } from "react";

function main() {
  const [gameScores, setGameScores] = useState([]);

  useEffect(() => {
    const getGameData = async () => {
      const response = await axios.get();
    };
  });

  function handleClick(id) {
    console.log("I have been clicked");
  }
  return (
    <>
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
