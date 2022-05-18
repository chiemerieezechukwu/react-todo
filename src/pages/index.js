import TodoList from "../components/TodoList";
import Modal from "../components/Modal";
import { useState } from "react";

const Index = () => {
  const [todoData, setTodoData] = useState([]);

  const todoData1 = [
    {
      title: "Clean the house",
      deadline: "today",
      status: "done"
    },
    {
      title: "Wash the car",
      deadline: "tomorrow",
      status: "inProgress"
    },
    {
      title: "Do Assignments",
      deadline: "yesterday",
      status: "notStarted"
    },
    {
      title: "Default todo",
      deadline: "default deadline",
      status: "doesn't exist"
    }
  ]

  return (
    <>
      <TodoList todoData={todoData1}/>
      <Modal setTodoData={setTodoData} />
    </>
  );
};

export default Index;
