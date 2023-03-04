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

  return (
    <header className="container">
      <Header />
      <Tasks tasks={tasks} />
    </header>
  );
}

export default App;
