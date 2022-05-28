import { useSelector } from "react-redux";
import Zadatak from "./Zadatak";

const TaskList = () => {
  const tasks = useSelector((state) => state.task.value);

  return (
    <div>
      {tasks && tasks.map((task) => {
        return (
          <Zadatak
            key={task.id}
            id={task.id}
            name={task.name}
            num={task.num}
            text={task.text}
          />
        );
      })}
    </div>
  );
};

export default TaskList;
