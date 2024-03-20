import React from "react";

/* Custom Hooks */
function useLocalStorage(itemName, initalValue) {
  const [item, setItem] = React.useState(initalValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if(!localStorageItem){
          localStorage.setItem(itemName, JSON.stringify(initalValue))
          parsedItem = [];
        }else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem)
        }

        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true)
      }
    }, 2000);
  }, [itemName, initalValue]);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return {
    item,
    saveItem,
    loading,
    error,
  };
}

export { useLocalStorage };

/*
localStorage.removeItem('TASK_V1')

const defaultTodos = [
  {text: "Cortar cebolla", completed: false},
  {text: "Tomar el curso de React", completed: true},
  {text: "llorar con la llorona", completed: false},
  {text: "ayuda ayuda", completed: true},
  {text: "ahahhaha", completed: false},
  {text: "datos derivados", completed: false},
]

localStorage.setItem('TASK_V1', JSON.stringify(defaultTodos)); */