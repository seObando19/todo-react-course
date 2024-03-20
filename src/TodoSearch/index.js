import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoSearch.css";

function TodoSearch() {

  //* Original => const [state, setState] = React.useState();
  const {
    searchValue,
    setSearchValue,
  } = React.useContext(TodoContext);

  return (
    <input
      type="text"
      className="TodoSearch"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
      placeholder="Cortar cebolla"
    />
  );
}

export { TodoSearch };
