import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTask } from "../features/ListOfTasks"

const Form = () => {
  const [name, setName] = useState()
  const [num, setnum] = useState()
  const [text, settext] = useState()
  const [zadatak, setzadatak] = useState({})

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    setzadatak({
      name: name,
      num: num,
      text: text
    })
    dispatch(addTask(zadatak))
  }

  return (
    <form className="form" onSubmit={submitHandler}>
      <h1>Dodajte vaš zadatak!</h1>
      <input type="text" placeholder="Naziv zadatka" onChange={e => setName(e.target.value)}/>
      <input type="number" placeholder="Broj bodova" onChange={e => setnum(e.target.value)}/>
      <textarea type="text" placeholder="Opis zadatka" rows={5} onChange={e => settext(e.target.value)}/>
      <button>Dodaj Zadatak</button>
    </form>
  )
}

export default Form