import TodoItem from "./TodoItem";

const TodoList = ({ todoData, handleSetCurrentTodo }) => {
  return (
    <>
      {todoData.map((todo, index) => {
        const { title, deadline, status } = todo;

        return (
          <TodoItem
            key={index}
            todoTitle={title}
            todoDeadline={deadline}
            itemStatus={status}
            handleSetCurrentTodo={() => handleSetCurrentTodo(todo, index)}
          />
        );
      })}
    </>
  );
};

export default TodoList;
