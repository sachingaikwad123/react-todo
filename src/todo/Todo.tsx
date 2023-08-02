import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import { v4 as uuid } from "uuid";
import { TodoItem } from "./TodoItem";
import TodoInput from "./TodoInput";
import useTodos from "./hooks/useTodos";
import "./Todo.css";

const Todo = () => {
  const { todos, addTodo, toggleTodo } = useTodos();

  return (
    <>
      <h1>My Todo Application </h1>
      <TodoInput onItemAdded={addTodo}></TodoInput>
      <ul>
        {todos.map((item) => {
          return (
            <li
              className="todo-item"
              key={item.id}
              onClick={() => toggleTodo(item.id)}
              data-completed={item.completed ? true : undefined}
            >
              {item.content}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Todo;
