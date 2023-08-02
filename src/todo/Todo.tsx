import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import { v4 as uuid } from "uuid";
import { TodoItem } from "./TodoItem";
import TodoInput from "./TodoInput";
import useTodos from "./hooks/useTodos";

const Todo = () => {
  const { todos, addTodo, toggleTodo } = useTodos();

  return (
    <>
      <div>Todo</div>
      <TodoInput onItemAdded={addTodo}></TodoInput>
      {todos.map((item) => {
        return (
          <li
            key={item.id}
            onClick={() => toggleTodo(item.id)}
            data-completed={item.completed ? true : undefined}
          >
            {item.content}
          </li>
        );
      })}
    </>
  );
};

export default Todo;
