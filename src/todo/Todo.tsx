import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import { v4 as uuid } from "uuid";

type TodoItem = {
  id: string;
  content: string;
};

const Todo = () => {
  const [content, setContent] = useState<string>("");
  const [todos, setTodos] = useState<TodoItem[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    if (e.code == "Enter") {
      const id = uuid();
      setTodos([{ id, content }, ...todos]);
    }
  };

  return (
    <>
      <div>Todo</div>
      <input
        type="text"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      ></input>
      {todos.map((item) => {
        return <li key={item.id}>{item.content}</li>;
      })}
    </>
  );
};

export default Todo;
