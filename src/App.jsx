import { useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Main from "./components/Main/main";
import Footer from "./components/Footer/Footer";

function App() {
  const [playerTurn, setPlayerTurn] = useState(true);
  return (
    <>
      <Header playerTurn = {playerTurn}/>
      <Main playerTurn = {playerTurn} setPlayerTurn = {setPlayerTurn} />
      <Footer />
    </>
  );
}

export default App;
