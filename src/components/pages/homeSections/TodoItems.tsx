import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { deleteReq, editReq, getReq } from "../../../redux/features/TodoSlices";

const TodoItems = () => {
  const [title, setTitle] = useState<string>("");
  const [img, setImg] = useState<string>("");
  const [edit, setEdit] = useState<number | null>(null);
  const { todo } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  function deleteItem(_id: number) {
    dispatch(deleteReq(_id));
  }

  function editItemValue(item: Todo) {
    setTitle(item.title);
    setImg(item.img);
    setEdit(item._id!);
  }

  function updateItem(_id: number) {
    let newData = {
      title,
      img,
    };
    dispatch(editReq({ _id, newData }));
    setEdit(null);
  }

  useEffect(() => {
    dispatch(getReq());
  }, [dispatch]);

  return (
    <div>
      {todo.map((item: Todo) => (
        <div>
          {edit === item._id ? (
            <>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
              />
              <input
                value={img}
                onChange={(e) => setImg(e.target.value)}
                type="text"
              />
              <button onClick={() => updateItem(item._id!)}>save</button>
            </>
          ) : (
            <>
              <p>{item.title}</p>
              <img src={item.img} alt="text" />
              <button onClick={() => deleteItem(item._id!)}>delete</button>
              <button
                onClick={() => {
                  editItemValue(item);
                  setEdit(item._id!);
                }}
              >
                edit
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default TodoItems;
