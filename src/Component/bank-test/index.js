import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Submit from "./Submit";
import Transaction from "./Transaction";
import TXReport from "./TXReport";
import Navbar from "./Navbar";
import { useState } from "react";

export default function BankApp() {
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(undefined);

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <CardsContainer cards={cards} setSelectedCard={setSelectedCard} />
        <Navbar />
        <Routes>
          <Route path="/" element={<Submit setCards={setCards} />} />
          <Route
            path="/transaction"
            element={
              <Transaction
                selectedCard={selectedCard}
                cards={cards}
                setCards={setCards}
              />
            }
          />
          <Route
            path="/tx-report"
            element={<TXReport selectedCard={selectedCard} />}
          />
        </Routes>
      </div>
  );
}

const CardsContainer = ({ cards, setSelectedCard }) => {
  return (
    <ul
      style={{
        height: "35%",
        width: "80%",
        display: "flex",
        alignItems: "center",
        backgroundColor: "blue",
        overflowX: "auto",
      }}
    >
      {cards.map((item, index) => {
        return (
          <li
            onClick={() => {
              setSelectedCard(item);
            }}
            key={index}
            style={{
              height: 220,
              width: 350,
              backgroundColor: "black",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 15,
              marginRight: 20,
              cursor: "pointer",
            }}
          >
            <p style={{ margin: 0, color: "white" }}>Number: {item.CardNum}</p>
            <p style={{ margin: 20, color: "white" }}>Owner: {item.Owner}</p>
            <p style={{ margin: 7, color: "white" }}>CVV: {item.CVV}</p>
            <p style={{ margin: 7, color: "white" }}>Exp: {item.Expire}</p>
            <p style={{ margin: 7, color: "white" }}>balance: {item.Balance}</p>
          </li>
        );
      })}
    </ul>
  );
};
