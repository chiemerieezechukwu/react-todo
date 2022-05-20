import Form from "./Form";

const Modal = ({
  handleAddTodo,
  handleUpdateTodo,
  handleCloseModal,
  currentTodo,
  setCurrentTodo,
  modalIsOpen,
}) => {
  return (
    <>
      {modalIsOpen ? (
        <Form
          handleAddTodo={handleAddTodo}
          handleUpdateTodo={handleUpdateTodo}
          handleCloseModal={handleCloseModal}
          currentTodo={currentTodo}
          setCurrentTodo={setCurrentTodo}
        />
      ) : null}
    </>
  );
};

export default Modal;
