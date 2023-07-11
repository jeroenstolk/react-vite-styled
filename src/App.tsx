import "./App.css";

import viteLogo from "/vite.svg";
import { useState } from "react";

import TextField from "@mui/material/TextField";

import reactLogo from "./assets/react.svg";
import Chart from "./Components/Chart";
import Clock from "./Components/Clock";
import StyledButtons from "./Components/StyledButtons";
import Todo from "./Components/Todo";
import SearchSelect from "./Components/SearchSelect";

function App() {
  const [count, setCount] = useState(0);

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      moveFocusDown();
      console.log("down");
    }
    if (e.key === "ArrowUp") {
      moveFocusUp();
      console.log("up");
    }
  };

  const moveFocusDown = () => {
    const listItems = document.querySelector("#app").childNodes;
    const activeItem = document.activeElement;
    for (let i = 0; i < listItems.length; i++) {
      const listLength = listItems.length;
      if (
        activeItem === listItems[i] &&
        activeItem !== listItems[listLength - 1]
      ) {
        listItems[i + 1].focus();
        console.log(activeItem);
      }
    }
  };

  const moveFocusUp = () => {
    const listItems = document.querySelector("#app").childNodes;
    //console.log(listItems);
    const activeItem = document.activeElement;
    for (let i = 0; i < listItems.length; i++) {
      if (activeItem === listItems[i] && activeItem !== listItems[0]) {
        listItems[i - 1].focus();
        console.log(activeItem);
      }
    }
  };

  return (
    <div className="App" id="app" onKeyDown={handleKeyDown}>
      <SearchSelect />
      <Todo />
      <StyledButtons />
      <Clock />
      <Chart />

      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + Styled</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
