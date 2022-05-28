import { FaRegTrashAlt } from "react-icons/fa";
import { AiTwotoneEdit } from "react-icons/ai";
import {  useDispatch } from "react-redux/es/exports";
import { delTask, editTask } from "../features/ListOfTasks";
import { useState } from "react";

const Zadatak = ({ name, num, text, id}) => {
  const dispatch = useDispatch()
  const [newName, setnewName] = useState()
  
  // Brisanje zadataka u listi
  const deleteHandler = () => {
    dispatch(delTask({id}))
  }

  return (
    <div className="zadatak">
      <h1>{name}</h1>
      <div className="dropdown">
        <p>{num}</p>
        <p>{text}</p>
      </div>
      <div>
        <input type="text" placeholder="Promjenite naziv" onChange={e => setnewName(e.target.value)}/>
        <button onClick={() => {dispatch(editTask({id: id, name: newName}))}}>Update</button>
      </div>
      <FaRegTrashAlt onClick={deleteHandler}/>
      <AiTwotoneEdit />
      <input type="checkbox" />
    </div>
  );
};

export default Zadatak;
