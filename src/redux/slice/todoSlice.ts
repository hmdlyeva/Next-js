import { createSlice, current } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
export interface Todo {
  id: string;
  content: string;
}

export interface TodoState {
  todo: Todo;
  todos: Todo[];
}

const initialState: TodoState = {
  todo: { id: "", content: "" },
  todos: [],
};

export const todoSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    getTodo: (state, action: PayloadAction<string>) => {
      let obj = {
        id: uuidv4(),
        content: action.payload,
      };

      state.todo = obj;
    },

    getTodos: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
    },

    deleteTodos: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id != action.payload);
    },

    editTodo: (state, action: PayloadAction<Todo>) => {
       let arr = [...current(state.todos)]
       arr = arr.map((todo)=>{
        if(todo.id == action.payload.id){
            return action.payload
        }
        else{
            return todo
        }
       })
       state.todos = arr
      },
  },
});

export const { getTodo, getTodos, deleteTodos ,editTodo} = todoSlice.actions;

export default todoSlice.reducer;
