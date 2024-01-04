import { useDispatch } from "react-redux";
import { deleteTodos } from "../redux/slice/todoSlice";

interface Id {
  id: string;
}

const DeleteBtn = ({ id }: Id) => {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(deleteTodos(id))}>Delete</button>
    </div>
  );
};

export default DeleteBtn;
