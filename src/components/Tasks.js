import { useState } from "react";

const Tasks = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Go to Vet",
      day: "Tomorrow at 11:00",
      reminder: true,
    },
    {
      id: 2,
      text: "Study React",
      day: "Today",
      reminder: true,
    },
    {
      id: 3,
      text: "Buy something nice",
      day: "Sunday",
      reminder: false,
    },
  ]);
  return (
    <>
      {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
      ))}
    </>
  );
};

export default Tasks;
