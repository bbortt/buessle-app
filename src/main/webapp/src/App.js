import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchHello } from "./redux/action/hello.action";

import "./App.scss";

export const App = () => {
  const dispatch = useDispatch();
  const { world } = useSelector((state) => ({
    world: state.hello.world,
  }));

  return (
    <div className="App">
      <header>
        hello {world ? `${world}!` : "..?"}
        <br />
        <br />
        <button onClick={() => dispatch(fetchHello())}>load data</button>
      </header>
    </div>
  );
};

export default App;
