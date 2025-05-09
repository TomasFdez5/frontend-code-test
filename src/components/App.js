import React from "react";

import store from "../stores/MainStore";
import Canvas from "./Canvas";
import { observer } from "mobx-react";
import Toolbar from "./Toolbar/Toolbar";

function App() {
  return (
    <div className="app">
      <Toolbar />
      <Canvas store={store} />
    </div>
  );
}

export default observer(App);
