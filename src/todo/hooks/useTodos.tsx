import React from "react";
import { TodoItem } from "../TodoItem";
import { useState } from "react";

const useTodos = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  const addTodo = (todoItem: TodoItem) => {
    setTodos([todoItem, ...todos]);
  };

  const toggleTodo = (id: string) => {
    const updatedTodos = todos.map((item) => {
      if (item.id == id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setTodos(updatedTodos);
  };

  return { todos, addTodo, toggleTodo };
};

export default useTodos;
