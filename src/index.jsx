import React from "react";
import { render } from "react-dom";
import { App } from "./App";

function Root() {
  return <App />;
}

render(<Root />, document.getElementById("root"));
