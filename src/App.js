import React from "react";
import "./index.css";
import Router from "./Router";
import generatePDF from './components/generatePDF'

function App() {
  return (
    <div>
      <Router />
      <button onclick={generatePDF()}>Modify PDF</button>
    </div>
  );
}

export default App;
