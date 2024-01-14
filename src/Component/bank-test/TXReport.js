export default function TXReport({ selectedCard }) {
  return (
    <div
      style={{
        height: "50%",
        width: "40%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflowY: "auto",
      }}
    >
      {selectedCard &&
        selectedCard.txs.map((item, index) => (
          <div
            key={index}
            style={{
              height: 50,
              width: "100%",
              borderTop: "1px solid black",
              borderBottom: "1px solid black",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 10,
            }}
          >
            <p>Origin: {item.origin}</p>
            <p>Dest: {item.dest}</p>
            <p>Value : {item.value}</p>
          </div>
        ))}
    </div>
  );
}
