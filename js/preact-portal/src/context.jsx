import { createContext } from "preact";
import { useEffect, useState } from "preact/hooks";
import emitter from "./emitter";

export const Context = createContext({ items: [], totalItems: 0 });

export function Provider({ children }) {
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
        <Context.Provider value={{ items, totalItems: items.length }}>
            {children}
        </Context.Provider>
    );
}
