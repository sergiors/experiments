import { createContext } from "preact";
import { useEffect, useState } from "preact/hooks";
import emitter from "./emitter";
import * as store from "./storage";

function findByIdx(items, idx) {
    return items.findIndex((x) => x.id === idx);
}

export const Context = createContext({
    items: [],
    isOpen: false,
});

export function Provider({ children }) {
    const [items, setItem] = useState(store.getItem());
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const unbind = emitter.on("added", (dataset) => {
            setIsOpen(true);

            if (findByIdx(items, dataset.id) !== -1) {
                return;
            }

            setItem((items) => {
                const newItems = [dataset, ...items];
                store.setItem(newItems);
                return newItems;
            });
        });

        return () => {
            unbind();
        };
    }, [items]);

    return (
        <Context.Provider value={{ items, isOpen, setIsOpen }}>
            {children}
        </Context.Provider>
    );
}
