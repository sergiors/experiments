import { createContext } from "preact";
import { useEffect, useState } from "preact/hooks";
import emitter from "./emitter";

export const Context = createContext({
    items: [],
    isOpen: false,
});

export function Provider({ children }) {
    const [items, setItem] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const unbind = emitter.on("added", (dataset) => {
            setItem((items) => [dataset, ...items]);
            setIsOpen(true);
        });

        return () => {
            unbind();
        };
    }, []);

    return (
        <Context.Provider value={{ items, isOpen, setIsOpen }}>
            {children}
        </Context.Provider>
    );
}
