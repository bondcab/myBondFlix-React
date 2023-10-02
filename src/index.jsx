// 3.2 Imports react function for rendering react components to the DOM
import { createRoot } from "react-dom";

import React from "react";

// 3.3 Adds the mainview component
import { MainView } from "./components/MainView/MainView";

//3.3 Adds the scss styling
import "./index.scss";

const App = () => {
  return <MainView />;
};

// 3.2 Finds app root
const container = document.getElementById("root");
const root = createRoot(container);

// 3.2 Tells react to render your app in the root DOM element
root.render(<App />, container);
