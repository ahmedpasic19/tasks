import { FaRegTrashAlt } from "react-icons/fa";
import { AiTwotoneEdit } from "react-icons/ai";
import {  useDispatch } from "react-redux/es/exports";
import { delTask, editTask } from "../features/ListOfTasks";
import { useState } from "react";

const Zadatak = ({ name, num, text, id}) => {
  const dispatch = useDispatch()
  const [newName, setnewName] = useState()
  const [toggleEdit, settoggleEdit] = useState(false)
  const [isChecked, setisChecked] = useState(false)
  const [isOpen, setisOpen] = useState(false)

  // Toggling edit menu open/close
  const toggleEditMenu = () => {
    settoggleEdit(!toggleEdit)
  }

  // Brisanje zadataka u listi
  const deleteHandler = () => {
    dispatch(delTask({id}))
  }

  // Toggling comleated/uncompleated
  const checkedHandler = () => {
    setisChecked(!isChecked)
  }

  // Toggle text box open/close
  const openText = () => {
    setisOpen(!isOpen)
  }

  return (
    <div className="zadatak">
      <div className="header">
      <p className={isChecked ? "text-gray-400" : "text-transparent"}>Comleated</p>
      <h1 onClick={openText}>{name}</h1>
      </div>
      <div className={isOpen ? "dropdown" : "hidden"}>
        <p className="font-semibold underline underline-offset-1">Zadatak nosi {num} bodova</p>
        <p>{text}</p>
      </div>
      <div className={toggleEdit ? "edit" : "hidden"}>
        <input type="text" placeholder="Promjenite naziv" onChange={e => setnewName(e.target.value)}/>
        <button onClick={() => {dispatch(editTask({id: id, name: newName}));settoggleEdit(!toggleEdit)}}>Update</button>
      </div>
      <div className="options">
        <FaRegTrashAlt onClick={deleteHandler} className="icon"/>
        <AiTwotoneEdit onClick={toggleEditMenu} className="icon"/>
        <input type="checkbox" checked={isChecked} onChange={checkedHandler} className="icon"/>
      </div>
    </div>
  );
};

export default Zadatak;
