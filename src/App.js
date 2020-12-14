import React, { Component, useEffect, useState } from "react";
import Jumbotron from "./Components/Jumbotron";
import NewToDo from "./Components/NewToDo";
import ToDoList from "./Components/ToDoList";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [editedTodo, setEditedTodo] = useState(null);

  useEffect(() => {
    let data = [];

    if (localStorage.data) {
      data = JSON.parse(localStorage.data);
    }

    setTodos(data);
  }, []);

  const addIntoTodos = (todo) => {
    todo.id = Math.floor(Math.random() * (100 - 10) - 10);
    localStorage.data = JSON.stringify([...todos, todo]);
    setTodos([...todos, todo]);
  };

  const markTodo = (index) => {
    const copyTodos = [...todos];
    copyTodos[index].done = !copyTodos[index].done;
    localStorage.data = JSON.stringify(copyTodos);
    setTodos(copyTodos);
  };

  const deleteTodo = (index) => {
    const copyTodos = [...todos];
    copyTodos.splice(index, 1);
    localStorage.data = JSON.stringify(copyTodos);
    setTodos(copyTodos);
  };

  const editTodo = (index) => {
    setEditedTodo({ todo: todos[index], index });
  };

  const editIntoTodo = (msg) => {
    const copyTodos = [...todos];
    copyTodos[editedTodo.index].msg = msg;
    localStorage.data = JSON.stringify(copyTodos);
    setTodos(copyTodos);
    setEditedTodo(null);
  };

  return (
    <div className="wrapp">
      <Jumbotron />
      <NewToDo
        addIntoTodos={addIntoTodos}
        value={editedTodo ? editedTodo : { todo: {} }}
        mode={editedTodo ? "edit" : "add"}
        editIntoTodo={editIntoTodo}
      />
      <ToDoList
        todos={todos}
        markTodo={markTodo}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />
    </div>
  );
};

export default App;
