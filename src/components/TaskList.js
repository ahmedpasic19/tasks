import { useSelector } from "react-redux"
import {v4 as uuidv4} from "uuid"

const TaskList = () => {
  const tasks = useSelector((state) => state.task.value)
  return (
    <div>
      {Object.values(tasks).map((task) => {return (<div key={uuidv4()}>{task.name}</div>)})}
      TASKKKS
      
    </div>
  )
}

export default TaskList