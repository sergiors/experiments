import { render } from "preact";
import { createPortal } from "preact/compat";
import { useContext, useEffect } from "preact/hooks";
import { Context, Provider } from "./context";
import emitter from "./emitter";

function Counter() {
    const { totalItems } = useContext(Context);

    if (totalItems === 0) {
        return null;
    }

    return (
        <span className="cart__counter">
            {totalItems >= 10 ? "9+" : totalItems}
        </span>
    );
}

function Button() {
    useEffect(() => {
        const el = document.querySelector(".cart__icon-area");

        if (el.classList.contains("waiting")) {
            el.classList.remove("waiting");
        }
    }, []);

    const handleClick = () => {
        console.log("a");
    };

    return (
        <button type="button" className="cart__button" onClick={handleClick}>
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
    
}

export function App() {
    const { items } = useContext(Context);

    return (
        <>
            {createPortal(
                <Button />,
                document.querySelector(".cart__icon-area")
            )}
            <div className="container">
                {items.map(({ id, name }) => {
                    return (
                        <div key={id}>
                            {id} {name}
                        </div>
                    );
                })}
            </div>
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
