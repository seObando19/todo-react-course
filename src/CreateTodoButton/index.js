import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton({setOpenModal}) {
  return (
    <>
      <div className="content-btn">
        <button
          className="CreateTodoButton"
          id="CreateTodoButton"
          onClick={() => {
            setOpenModal(state => !state);
          }}
        >
          +
        </button>
      </div>
    </>
  );
}

export { CreateTodoButton };
