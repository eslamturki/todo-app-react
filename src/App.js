import { useEffect, useRef, useState } from "react";
import "./App.css";
import useRandomQuote from "./useRandomQuote";

function App() {
  const todoref = useRef(null);

  const [todos, setTodos] = useState([
    {
      name: "Complete the PAPA courses",
      status: "Active",
      // date: Date.now(),
    },
  ]);
  const [input, setInput] = useState("");

  const addTodo = (e) => {
    const n = { name: todoref.current.value, status: "do" };
    console.log(typeof todos);
    console.log(n);
    e.preventDefault();
    setTodos([{ ...todos }], n);
    // setTodos(() => [
    //   todos,
    //   { name: todoref.current.value, status: "Inactive" },
    // ]);
    // setTodos(...todos, { name: todoref.current.value, status: "Inactive" });
    // console.log(input);
    {
      console.log(todos);
    }
    setInput("");
  };
  const quote = useRandomQuote();
  return (
    <div className="App">
      <header className="App-header">
        <h1>{quote["text"]}</h1>
        <h2>By:{quote["author"]}</h2>
      </header>
      <h1>Todo APP</h1>

      <form>
        <input type="text" placeholder="What you will do?" ref={todoref} />
        <button onClick={addTodo}>Add Todo</button>
      </form>

      <h2>My List</h2>

      {/* {Object.entries(todos).map(([item, index]) => {
        <li>{todos[item].name}</li>;
      })} */}
    </div>
  );
}

export default App;
