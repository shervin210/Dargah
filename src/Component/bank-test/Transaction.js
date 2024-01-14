import { useEffect, useState } from "react";

export default function Transaction({ cards, setCards, selectedCard }) {
  const [OriginCard, setOriginCard] = useState("");
  const [CVV, setCVV] = useState("");
  const [ExpDate, setExpDate] = useState("");
  const [DestCard, setDestCard] = useState("");
  const [Value, setValue] = useState("");

  const sendTransaction = (e) => {
    e.preventDefault();
    const copy = [...cards];
    copy.find((item) => item.CardNum == selectedCard.CardNum).Balance -=
      parseInt(Value);
    const newTx = {
      origin: selectedCard.CardNum,
      dest: DestCard,
      value: Value,
    };
    copy.find((item) => item.CardNum == selectedCard.CardNum).txs.push(newTx);
    setCards(copy);
  };

  useEffect(() => {
    if (selectedCard) {
      setOriginCard(selectedCard.CardNum);
      setCVV(selectedCard.CVV);
      setExpDate(selectedCard.Expire);
    }
  }, [selectedCard]);

  return (
    <form
      onSubmit={sendTransaction}
      style={{
        height: "50%",
        width: "30%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "rebeccapurple",
      }}
    >
      <input
        disabled
        style={{ height: 35, width: "80%" }}
        value={OriginCard}
        placeholder="Origin Card"
      />
      <input
        disabled
        style={{ height: 35, width: "80%" }}
        value={CVV}
        placeholder="CVV"
      />
      <input
        disabled
        style={{ height: 35, width: "80%" }}
        value={ExpDate}
        placeholder="Expiry Date"
      />
      <input
        style={{ height: 35, width: "80%" }}
        placeholder="Destination Card"
        value={DestCard}
        onChange={(e) => setDestCard(e.target.value)}
        type="number"
      />
      <input
        style={{ height: 35, width: "80%" }}
        value={Value}
        onChange={(e) => setValue(e.target.value)}
        type="number"
        placeholder="Value"
      />
      <button>Submit Transaction</button>
    </form>
  );
}
