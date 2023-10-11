import React, { useState } from 'react';

export default function AddTodo({ addItem }) {
  const [todoItem, setTodoItems] = useState({
    title: '',
  });
  const onButtonClick = () => {
    addItem(todoItem);
    // 추가하고 초기화
    setTodoItems({
      title: '',
    });
  };
  return (
    <div className="AddTodo">
      <input
        type="text"
        placeholder="Add your new TODO"
        value={todoItem.title}
        onChange={(e) => setTodoItems({ title: e.target.value })}
      />
      <button onClick={onButtonClick}>추가</button>
    </div>
  );
}
