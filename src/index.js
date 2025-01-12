import React from "react";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
function App() {
  return (
    <div>
      <h1>Hello React!!!!!!!!</h1>
      <Pizza />
    </div>
  );
}
function Pizza() {
  return (
    <div>
    <img src="pizzas/spinaci.jpg" alt='pizza de espinafri'/>
    <h2>Pizza Spinaci</h2>
    <p>Tomato, mozarella, Spinach, and ricotta cheese</p>
    </div>
  )
}

function Menu(){

}
function Footer(){

}

const domNode = document.getElementById("root");
const root = createRoot(domNode);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
