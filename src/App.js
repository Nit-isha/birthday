import { useState } from "react";
import Data from "./Data";
import List from "./List";

function App() {
  const [people, setpeople] = useState(Data);

  return (
    <main>
      <section className="container">
        <h3>{people.length} Birthdays Today</h3>
        <List people={people} />
        <button onClick={() => setpeople([])}>Click me</button>
      </section>
    </main>
  );
}

export default App;
