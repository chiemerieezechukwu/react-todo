import Button from "./Button";
import TodoItem from "./TodoItem";

const TodoList = ({ todoData }) => {
  return (
    <>
      <Button buttonText={"Add"} twButtonBgColor={"bg-blue-600"} />
      {todoData.map(({ title, deadline, status }) => (
        <TodoItem
          todoTitle={title}
          todoDeadline={deadline}
          itemStatus={status}
        />
      ))}
    </>
  );
};

export default TodoList;
