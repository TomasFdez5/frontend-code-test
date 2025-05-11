import React from "react";
import ToolbarActions from "./ToolbarActions";
import ToolbarInfo from "./ToolbarInfo";
import "./Toolbar.css";

const Toolbar = () => (
  <div className="toolbar">
    <ToolbarActions />
    <ToolbarInfo />
  </div>
);

export default Toolbar;
