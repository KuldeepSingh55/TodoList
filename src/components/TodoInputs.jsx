import React, { useState } from 'react';

function TodoInputs({ addList }) {
  const [inputText, setInputText] = useState('');

  const handleAdd = () => {
    addList(inputText);
    setInputText('');
  };

  return (
    <div className="input-container">
      <input
        type="text"
        className="input-box-todo"
        placeholder="Enter your Todo"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button className="add-btn" onClick={handleAdd}>
        +
      </button>
    </div>
  );
}

export default TodoInputs;
