import React, { useState } from 'react';

//checkbox와 label을 렌더링하는 투두 하나
export default function Todo({ item, deleteItem }) {
  console.log(item);
  const { id, title, done } = item;
  const [todoItem, setTodoItem] = useState(item);
  const [readOnly, setReadOnly] = useState(true);
  const onDeleteButtonClick = () => {
    deleteItem(item);
  };
  //title 클릭하면 readOnly를 false 변경 (수정가능하도록!)
  const offReadOnlyMode = () => {
    setReadOnly(false);
  };
  const editEventHandler = (e) => {
    const { title, ...rest } = todoItem;
    setTodoItem({ title: e.target.value, ...rest });
  };
  //Enter 키 누르면 readOnly를 true로 변경
  const editKeyEventHandler = (e) => {
    if (e.key === 'Enter') {
      setReadOnly(true);
    }
  };
  const checkboxEventHandler = (e) => {
    const { done, ...rest } = todoItem;
    setTodoItem({ done: e.target.checked, ...rest });
  };
  return (
    <div>
      <input
        type="checkbox"
        name={`todo${id}`}
        id={`todo${id}`}
        defaultChecked={done}
        onChange={checkboxEventHandler}
      />
      {/* <label htmlFor={`todo${id}`}>{title}</label> */}
      <input
        type="text"
        value={todoItem.title}
        readOnly={readOnly}
        onClick={offReadOnlyMode}
        onChange={editEventHandler}
        onKeyDown={editKeyEventHandler}
      />
      <button onClick={onDeleteButtonClick}> DELETE</button>
    </div>
  );
}
