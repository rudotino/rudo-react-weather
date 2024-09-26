import React from "react";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      {" "}
      <div className="container">
        <Weather />

        <footer>
          This project was coded by Rudo Tino and is{" "}
          <a
            href="https://github.com/rudotino/rudo-react-weather"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
