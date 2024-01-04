"use client";

import type { RootState } from "../redux/store/store";
import { useSelector } from "react-redux";
import DeleteBtn from "./DeleteBtn";
import EditBtn from "./EditBtn";

const Todos = () => {
  const todos = useSelector((state: RootState) => state.todo.todos);

  return (
    <div>
      <ul>
        {todos
          ? todos.map((todo) => {
              return (
                <li style={{display:"flex"}} key={todo.id}>
                 <div style={{width:"50px"}}> {todo.content}</div>
                  <DeleteBtn id={todo.id} />
                  <EditBtn id={todo.id} />
                </li>
              );
            })
          : null}
      </ul>
    </div>
  );
};

export default Todos;
