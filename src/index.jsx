// Imports react function for rendering react components to the DOM
import { createRoot } from "react-dom/client";
import React from "react";

// Adds the mainview component
import { MainView } from "./components/MainView/MainView";

// Adds the scss styling
import "./index.scss";

const App = () => {
  return <MainView />;
};

// Finds app root
const container = document.getElementById("root");
const root = createRoot(container);

// Tells react to render your app in the root DOM element
root.render(<App />);
