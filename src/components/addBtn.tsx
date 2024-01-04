import type { RootState } from "../redux/store/store";
import { useSelector, useDispatch } from "react-redux";
import { getTodos } from "../redux/slice/todoSlice";

const addBtn = () => {
  const todo = useSelector((state: RootState) => state.todo.todo);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(getTodos(todo))}>Add</button>
    </div>
  );
};

export default addBtn;
