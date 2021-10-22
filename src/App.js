import { useEffect, useRef, useState } from "react";
import "./App.css";
import useRandomQuote from "./useRandomQuote";

function App() {
  const todoref = useRef(null);

  const [todos, setTodos] = useState([
    {
      name: "Complete the PAPA courses",
      status: true,
      date: new Date().toLocaleString(),
    },
    {
      name: "Complete the Todo App",
      status: false,
      date: new Date().toLocaleString(),
    },
  ]);
  const [input, setInput] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    const new_todo = { name: todoref.current.value, status: true };
    // console.log(typeof todos);
    console.log(new_todo);

    setTodos([...todos, new_todo]);
    console.log(todos);
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

        <button type="submit" onClick={addTodo}>
          Add Todo
        </button>
      </form>

      <h2>My List</h2>
      {todos.map((todo) => {
        return (
          <div>
            <li>{todo.name}</li> <h5>{todo.date}</h5>
          </div>
        );
      })}
    </div>
  );
}

export default App;
