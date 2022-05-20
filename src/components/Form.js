import Button from "./Button";

const Form = ({
  handleAddTodo,
  handleUpdateTodo,
  handleCloseModal,
  currentTodo,
  setCurrentTodo,
}) => {
  const handleChange = (e) => {
    setCurrentTodo({ ...currentTodo, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form>
        <div>
          <input
            name="title"
            type="text"
            placeholder="Title"
            value={currentTodo.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            name="deadline"
            type="text"
            placeholder="Deadline"
            value={currentTodo.deadline}
            onChange={handleChange}
          />
        </div>
        <div>
          <select
            name="status"
            value={currentTodo.status}
            onChange={handleChange}
          >
            <option value="notStarted">Not started</option>
            <option value="inProgress">In progress</option>
            <option value="done">Done</option>
          </select>
        </div>

        <Button
          buttonText={"Cancel"}
          twButtonBgColor={"bg-gray-600"}
          handleOnClick={handleCloseModal}
        />
        <Button
          buttonText={"Add"}
          twButtonBgColor={"bg-green-600"}
          handleOnClick={handleAddTodo}
        />
        <Button
          buttonText={"Update"}
          twButtonBgColor={"bg-blue-600"}
          handleOnClick={handleUpdateTodo}
        />
      </form>
    </>
  );
};

export default Form;
