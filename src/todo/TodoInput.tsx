import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import { TodoItem } from "./TodoItem";
import { v4 as uuid } from "uuid";

type TodoInputProps = {
  onItemAdded: (todoItem: TodoItem) => void;
};

const TodoInput = (props: TodoInputProps) => {
  const { onItemAdded } = props;
  const [content, setContent] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    if (e.code == "Enter") {
      const id = uuid();
      onItemAdded({ id, content, completed: false });
    }
  };

  return (
    <>
      <input
        type="text"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      ></input>
    </>
  );
};

export default TodoInput;
