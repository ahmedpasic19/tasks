import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTask } from "../features/ListOfTasks"

const Form = () => {
  return (
    <form className="form">
      <h1>Dodajte vaš zadatak!</h1>
      <input type="text" placeholder="Naziv zadatka" />
      <input type="number" placeholder="Broj bodova" />
      <textarea type="text" placeholder="Opis zadatka" rows={5}/>
      <button>Dodaj Zadatak</button>
    </form>
  )
}

export default Form