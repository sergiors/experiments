import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CartProvider } from "./context";
import emitter from "./emitter";

function buyItem({ target: { dataset } }) {
    emitter.emit("added", dataset);
}

Array.from(document.querySelectorAll(".buy-it")).forEach((el) =>
    el.addEventListener("click", buyItem)
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <CartProvider>
            <App />
        </CartProvider>
    </React.StrictMode>
);
