import React from "react";
import { observer } from "mobx-react-lite";
import ToolbarActions from "./ToolbarActions";
import ToolbarInfo from "./ToolbarInfo";
import "./Toolbar.css";

const Toolbar = observer(() => (
  <div className="toolbar">
    <ToolbarActions />
    <ToolbarInfo />
  </div>
));

export default Toolbar;
