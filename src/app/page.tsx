"use client";

import Link from "next/link";

import type { RootState } from "../redux/store/store";
import { useSelector, useDispatch } from "react-redux";
import { getTodo } from "../redux/slice/todoSlice";

import AddBtn from "@/components/addBtn";
import Todos from "@/components/Todos";

export default function Home() {
  const todo = useSelector((state: RootState) => state.todo.todo);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Home page</h1>
      <Link href="/blog">Blog</Link>
      <Link href="/products">Products</Link>

      <br />
      <br />
      <div style={{display:"flex"}}>
        <input
          type="text"
          name=""
          id=""
          placeholder="Todo"
          onChange={(e) => dispatch(getTodo(e.target.value))}
        />
        <AddBtn />
      </div>
      <Todos />
    </>
  );
}
