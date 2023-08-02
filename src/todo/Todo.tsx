import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import { v4 as uuid } from "uuid";
import { TodoItem } from "./TodoItem";
import TodoInput from "./TodoInput";

const Todo = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  const onItemAdded = (todoItem: TodoItem) => {
    setTodos([todoItem, ...todos]);
  };

  const handleClick = (id: string) => {
    const updatedTodos = todos.map((item) => {
      if (item.id == id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <div>Todo</div>
      <TodoInput onItemAdded={onItemAdded}></TodoInput>
      {todos.map((item) => {
        return (
          <li
            key={item.id}
            onClick={() => handleClick(item.id)}
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
