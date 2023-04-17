import { useState } from "react";
import "./App.css";

function App() {
    return (
        <>
            <section>
                <fieldset>
                    <h1>Counters that update separately</h1>
                    <div className="btns">
                        <MyButton />
                        <MyButton />
                        <MyButton />
                        <MyButton />
                        <MyButton />
                        <MyButton />
                        <MyButton />
                        <MyButton />
                    </div>
                </fieldset>
            </section>
        </>
    );
}

function MyButton() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return <button onClick={handleClick}>Clicked {count} times</button>;
}

export default App;
