import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <ul
      style={{
        height: "5%",
        width: "25%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <li
        style={{
          padding: 5,
          paddingRight: 15,
          paddingLeft: 15,
          backgroundColor: "blue",
          color: "white",
          listStyle: "none",
          cursor: "pointer",
        }}
      >
        <Link
          style={{
            color: "white",
            textDecoration: "none",
          }}
          to={"/tx-report"}
        >
          Transactions report
        </Link>
      </li>

      <li
        style={{
          padding: 5,
          paddingRight: 15,
          paddingLeft: 15,
          backgroundColor: "blue",
          color: "white",
          listStyle: "none",
          cursor: "pointer",
        }}
      >
        <Link
          style={{
            color: "white",
            textDecoration: "none",
          }}
          to={"/transaction"}
        >
          Transaction
        </Link>
      </li>
      <li
        style={{
          padding: 5,
          paddingRight: 15,
          paddingLeft: 15,
          backgroundColor: "blue",
          listStyle: "none",
          cursor: "pointer",
        }}
      >
        <Link
          style={{
            color: "white",
            textDecoration: "none",
          }}
          to={"/"}
        >
          Submit card
        </Link>
      </li>
    </ul>
  );
}
