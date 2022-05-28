import { FaRegTrashAlt } from "react-icons/fa";
import { AiTwotoneEdit } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { useState } from "react";
import { delTask } from "../features/ListOfTasks";

const Zadatak = ({ name, num, text, id}) => {
  const tasks = useSelector((state) => state.task.value);
  const [newTasksArr, setnewTasksArr] = useState([])
  const dispatch = useDispatch()
  
  // Brisanje zadataka u listi
  const deleteHandler = () => {
    dispatch(delTask({id}))
    console.log(tasks)
  }

  return (
    <div className="zadatak">
      <h1>{name}</h1>
      <div className="dropdown">
        <p>{num}</p>
        <p>{text}</p>
      </div>
      <FaRegTrashAlt onClick={deleteHandler}/>
      <AiTwotoneEdit />
      <input type="checkbox" />
    </div>
  );
};

export default Zadatak;
