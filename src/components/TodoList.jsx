import React from 'react';

function TodoList({ item, index, deleteItem }) {
  return (
    <li className="list-item">
      {item}
      <span onClick={() => deleteItem(index)}>
        <i className="fa-solid fa-trash-can icon-delete"></i>
      </span>
    </li>
  );
}

export default TodoList;
