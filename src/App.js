import React, { Component } from 'react';
import Jumbotron from "./Components/Jumbotron";
import NewToDo from "./Components/NewToDo";
import ToDoList from "./Components/ToDoList";
import "./App.css";

class App extends Component {

    state = {
        todos: []
    }

    componentDidMount() {
        let data = [];

        if(localStorage.data) {
            data = JSON.parse(localStorage.data)
        }

        this.setState({
            todos : data
        })
    }

    addIntoTodos = (todo) => {
        todo.id = Math.floor(Math.random()*(100-10)-10);
        localStorage.data = JSON.stringify([...this.state.todos,todo])
        this.setState({todos: [...this.state.todos,todo]})
    }

    markTodo = (index) => {
        const copyTodos = [...this.state.todos];
        copyTodos[index].done = !copyTodos[index].done
        localStorage.data = JSON.stringify(copyTodos);
        this.setState({todos:copyTodos})
    }

    deleteTodo = (index) => {
        const copyTodos = [...this.state.todos];
        copyTodos.splice(index, 1)
        localStorage.data = JSON.stringify(copyTodos);
        this.setState({todos:copyTodos})
    }

    render() {
        return (
            <div className="wrapp">
                <Jumbotron />
                <NewToDo addIntoTodos={this.addIntoTodos}/>
                <ToDoList todos={this.state.todos} markTodo={this.markTodo} deleteTodo={this.deleteTodo} />
            </div>
        )
    }
}

export default App;
