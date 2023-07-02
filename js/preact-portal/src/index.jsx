import { render } from "preact";
import { createPortal } from "preact/compat";
import { useContext, useEffect } from "preact/hooks";
import { Context, Provider } from "./context";
import emitter from "./emitter";

function Counter() {
    const { items } = useContext(Context);
    const total = items.length;

    if (total === 0) {
        return null;
    }

    return <span className="cart__counter">{total >= 10 ? "9+" : total}</span>;
}

function Button() {
    const { setIsOpen } = useContext(Context);

    useEffect(() => {
        const el = document.querySelector(".cart__icon-area");

        if (el.classList.contains("waiting")) {
            el.classList.remove("waiting");
        }
    }, []);

    return (
        <button
            type="button"
            className="cart__button"
            onClick={() => setIsOpen(true)}
        >
            <Counter />
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                style={{ width: "1.6rem", height: "1.6rem" }}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
            </svg>
        </button>
    );
}

function Drawer() {
    const { items, isOpen, setIsOpen } = useContext(Context);
    const total = items.length;

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
    }, [isOpen]);

    const handleClose = () => setIsOpen(false);

    return (
        <div className={isOpen ? "open" : null}>
            <div className="drawer__backdrop" onClick={handleClose} />
            <div className="drawer__content">
                <button onClick={handleClose}>fechar</button>
                {total === 0 && <>zero</>}
                {items.map(({ id, name }) => {
                    return (
                        <div key={id}>
                            {id} {name}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export function App() {
    return (
        <>
            {createPortal(
                <Button />,
                document.querySelector(".cart__icon-area")
            )}
            <Drawer />
        </>
    );
}

function buyItem({ target: { dataset } }) {
    emitter.emit("added", dataset);
}

Array.from(document.querySelectorAll(".buy-it")).forEach((el) =>
    el.addEventListener("click", buyItem)
);

render(
    <Provider>
        <App />
    </Provider>,
    document.getElementById("app")
);
