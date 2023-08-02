import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import { v4 as uuid } from "uuid";

interface Item {
  id: string;
  value: string;
}

const Todo = () => {
  const [newTodo, setNewTodo] = useState<string>("");
  const [todoList, setTodoList] = useState<Array<Item>>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    if (e.code == "Enter") {
      let newItem: Item = { id: uuid(), value: newTodo };
      let newTodoList: Array<Item> = [newItem].concat(todoList);
      setTodoList(newTodoList);
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
      {todoList.map((item) => {
        return <li key={item.id}>{item.value}</li>;
      })}
    </>
  );
};

export default Todo;
