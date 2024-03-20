import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from "../TodosLoading";
import { TodosError } from "../TodosError";
import { EmptyTodos } from "../EmptyTodos";
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoContext } from '../TodoContext';
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";

function AppUI() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal
  } = React.useContext(TodoContext);
  return (
    /* JSX = HTML + XML */
    /* la regla de react establece que el return debe devolver 1 elemento, el cual contiene a los demas */
    /* si se desea no tener el div className="App" debe usarse el React.Fragment // <React.Fragment> == <> */

    <>
      <TodoCounter/>
      <TodoSearch/>
        <TodoList>
          {loading && (
            <>
              <TodosLoading/>
              <TodosLoading/>
              <TodosLoading/>
            </>
          )}
          {error && <TodosError/>}
          {(!loading && searchedTodos.length === 0) && <EmptyTodos/>}
          {searchedTodos.map(todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={ () => completeTodo(todo.text)}
              onDelete={ () => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>

      <CreateTodoButton
        setOpenModal={setOpenModal}
      />

      { openModal && (
        <Modal>
          <TodoForm></TodoForm>
        </Modal>
      )}
    </>
  );
}

export { AppUI };