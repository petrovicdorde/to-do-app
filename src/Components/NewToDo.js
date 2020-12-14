import React, { Component, useEffect, useState } from "react";

const NewToDo = ({
  addIntoTodos,
  value = { todo: {} },
  mode,
  editIntoTodo,
}) => {
  const [msg, setMsg] = useState(value.todo.msg);

  useEffect(() => {
    setMsg(value.todo.msg);
  }, [value]);

  const setNewMsg = (e) => {
    setMsg(e.target.value);
  };

  const addTodo = () => {
    if (msg !== "") {
      addIntoTodos({ msg, done: false });
      setMsg("");
    }
  };

  const myEditTodo = () => {
    editIntoTodo(msg);
    setMsg("");
  };

  return (
    <div className="container">
      <div className="row m-5">
        <div className="col-8 offset-2">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              value={msg}
              placeholder="New meassage"
              onChange={setNewMsg}
            />
            <div className="input-group-append">
              <button
                onClick={() => {
                  if (mode == "add") {
                    addTodo();
                  } else {
                    myEditTodo();
                  }
                }}
                className="btn btn-primary"
              >
                {mode}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewToDo;
