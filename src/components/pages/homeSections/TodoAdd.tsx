import { useState } from "react";
import { useAppDispatch } from "../../../redux/store";
import { postReq } from "../../../redux/features/TodoSlices";

const TodoAdd = () => {
  const [title, setTitle] = useState<string>("");
  const [img, setImg] = useState<string>("");
  const dispatch = useAppDispatch();

  function postTodo() {
    if (!title || !img) {
      alert(404);
    } else {
      let newData = {
        title,
        img,
      };
      dispatch(postReq(newData));
    }
  }

  return (
    <div>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
      />
      <input value={img} onChange={(e) => setImg(e.target.value)} type="text" />
      <button onClick={postTodo}>add</button>
    </div>
  );
};

export default TodoAdd;
