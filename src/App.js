import "./styles.css";
import Form from "./components/Form";
import ItemList from "./components/ItemList";
import { useEffect, useState } from "react";

export default function App() {
  const storageKey = "todoApp.todos";
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem(storageKey));
    if (storedList) {
      setTodos(storedList);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(todos));
  }, [todos]);

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const addTodo = (todo) => {
    todos.push(todo);
    let updatedTodos = [...todos];
    setTodos(updatedTodos);
  };

  const completeTodo = (todo) => {
    const indexFinder = (_todo) => {
      return _todo.id === todo.id;
    };
    let index = todos.findIndex(indexFinder);

    let completedTodos = [...todos];
    completedTodos[index].isCompleted = true;

    setTodos(completedTodos);
  };

  return (
    <div className="App">
      <h2 className="title">To Do App</h2>
      <Form addTodo={addTodo} />
      <ItemList
        itemList={todos}
        removeCallback={removeTodo}
        completeTodo={completeTodo}
      />
    </div>
  );
}
