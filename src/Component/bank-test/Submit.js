import { useState } from "react";

export default function Submit({ setCards }) {
  const [CardNum, setCardNum] = useState("");
  const [Owner, setOwner] = useState("");
  const [CVV, setCVV] = useState("");
  const [Expire, setExpire] = useState("");
  const [Balance, setBalance] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCard = {
      CardNum: CardNum,
      Owner: Owner,
      CVV: CVV,
      Expire: Expire,
      Balance: Balance,
      txs: [],
    };

    setCards((prev) => [...prev, newCard]);
    setCardNum("");
    setOwner("");
    setCVV("");
    setExpire("");
    setBalance("");
  };

  return (
    <form
      style={{
        height: "50%",
        width: "30%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "royalblue",
      }}
      onSubmit={handleSubmit}
    >
      <input
        style={{ height: 35, width: "80%" }}
        value={CardNum}
        onChange={(e) => {
          setCardNum(e.target.value);
        }}
        placeholder="Card Number"
        type="number"
      />
      <input
        style={{ height: 35, width: "80%" }}
        value={Owner}
        onChange={(e) => setOwner(e.target.value)}
        placeholder="Owner Name"
      />
      <input
        style={{ height: 35, width: "80%" }}
        value={CVV}
        onChange={(e) => setCVV(e.target.value)}
        placeholder="CVV2"
      />
      <input
        style={{ height: 35, width: "80%" }}
        value={Expire}
        onChange={(e) => setExpire(e.target.value)}
        placeholder="Expiry Date"
      />
      <input
        style={{ height: 35, width: "80%" }}
        value={Balance}
        onChange={(e) => setBalance(e.target.value)}
        placeholder="Balance"
      />
      <button>Submit card</button>
    </form>
  );
}
