import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import { v4 as uuid } from "uuid";
import { TodoItem } from "./TodoItem";
import TodoInput from "./TodoInput";

const Todo = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  const onItemAdded = (todoItem: TodoItem) => {
    setTodos([todoItem, ...todos]);
  };

  return (
    <>
      <div>Todo</div>
      <TodoInput onItemAdded={onItemAdded}></TodoInput>
      {todos.map((item) => {
        return <li key={item.id}>{item.content}</li>;
      })}
    </>
  );
};

export default Todo;
