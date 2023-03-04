import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
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

  //delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <header className="container">
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onToggle={toggleReminder} onDelete={deleteTask} />
      ) : (
        "No tasks"
      )}
    </header>
  );
}

export default App;
