import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import { v4 as uuid } from "uuid";
import { TodoItem } from "./TodoItem";
import TodoInput from "./TodoInput";
import useTodos from "./hooks/useTodos";
import "./Todo.css";

const Todo = () => {
  const { todos, addTodo, deleteTodo, toggleTodo } = useTodos();

  return (
    <>
      <h1>My Todo Application </h1>
      <TodoInput onItemAdded={addTodo}></TodoInput>
      <ul>
        {todos.map((item) => {
          return (
            <div className="todo-item" key={item.id}>
              <span
                onClick={() => toggleTodo(item.id)}
                data-completed={item.completed ? true : undefined}
              >
                {item.content}
              </span>
              <button data-testid="delete" onClick={() => deleteTodo(item.id)}>
                Delete
              </button>
            </div>
          );
        })}
      </ul>
    </>
  );
};

export default Todo;
