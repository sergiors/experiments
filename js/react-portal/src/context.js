import React, { createContext, useEffect, useState } from "react";
import emitter from "./emitter";

export const CartContext = createContext({});

export function CartProvider({ children }) {
    const [items, setItem] = useState([]);

    useEffect(() => {
        const addItem = emitter.on("added", (dataset) => {
            setItem((items) => [dataset, ...items]);
        });

        return () => {
            addItem();
        };
    }, []);

    return (
        <CartContext.Provider value={{ items, totalItems: items.length }}>
            {children}
        </CartContext.Provider>
    );
}
