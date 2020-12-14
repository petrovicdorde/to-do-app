import React from 'react';
import ToDo from './ToDo';

const ToDoList = ({ todos, markTodo, deleteTodo, editTodo }) => {

    const allToDos = todos.map((todo, index) => {
        return (
            <ToDo todo={todo} key={todo.id} index={index} markTodo={markTodo} deleteTodo={deleteTodo} editTodo={editTodo} />
        )
    })

    return (
        <div className="container">
            <div className="row">
                {allToDos}
            </div>
        </div>
    )
}

export default ToDoList;