import { useDispatch } from "react-redux";
import { editTodo } from "../redux/slice/todoSlice";

interface Id {
  id: string;
}

const EditBtn = ({ id }: Id) => {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => {
        const newContent = prompt()!;
        dispatch(editTodo({ id: id, content: newContent }));
      }}
    >
      Edit
    </button>
  );
};

export default EditBtn;
