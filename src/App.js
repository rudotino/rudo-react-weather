import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      {" "}
      <div className="container">
        <h1> WeatherApp </h1>
        <h2>Hello weather</h2>
        <button className="btn btn-primary">Hello</button>
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
