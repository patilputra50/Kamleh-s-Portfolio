// import "./styles.css";

// export default function App() {
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }

import React from "react";
import "./styles.css";
import { useState } from "react";

const Naturalplaces = {
  India: [
    { name: "Leh", rating: "4/5" },
    { name: "Alleppey", rating: "3.5/5" },
    { name: "Hampi", rating: "4.5/5" }
  ],

  Italy: [
    { name: "Grotta Azzurra", rating: "4/5" },
    { name: "Lago di Garda", rating: "3.5/5" },
    { name: "Cascate del Mulino", rating: "4.5/5" }
  ],

  Bhutan: [
    { name: "Gangkar Punsum", rating: "4/5" },
    { name: "Burning Lake", rating: "3.5/5" },
    { name: "Ura Valley", rating: "4.5/5" }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Bhutan");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h2> 🦖 Natural places to visit </h2>
      <p style={{ fontSize: " " }}>
        {" "}
        See my list of some awesome natural places to visit{" "}
      </p>

      <div>
        {Object.keys(Naturalplaces).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {Naturalplaces[selectedGenre].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem",
                textAlign: "center"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "smaller" }}> {book.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
