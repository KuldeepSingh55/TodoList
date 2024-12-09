import { useState } from 'react';
import './App.css';
import TodoInputs from './components/TodoInputs';
import TodoList from './components/TodoList';

function App() {
  const [listTodo, setListTodo] = useState([]);

  const addList = (inputText) => {
    if (inputText.trim()) {
      setListTodo([...listTodo, inputText.trim()]);
    }
  };

  const deleteListItem = (key) => {
    setListTodo(listTodo.filter((_, index) => index !== key));
  };

  return (
    <div className="main-container">
      <div className="center-container">
      <h1 className="app-heading">TODO</h1>
        <TodoInputs addList={addList} />
        <hr />
        <ul>
          {listTodo.map((listItem, i) => (
            <TodoList
              key={i}
              index={i}
              item={listItem}
              deleteItem={deleteListItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
