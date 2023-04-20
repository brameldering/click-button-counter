import { useState } from "react";
import "./App.css";

function App() {
  function buttons(nrOfButtons = 1) {
    const rows = [];
    for (let i = 0; i < nrOfButtons; i++) {
      rows.push(<MyButton key={i} />);
    }
    return <div className='btns'>{rows}</div>;
  }

  return (
    <>
      <section>
        <fieldset>
          <h1>Counters that update separately</h1>
          {buttons(10)};
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
