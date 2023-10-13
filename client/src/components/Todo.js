import React, { useState, useEffect } from 'react';

//checkbox와 label을 렌더링하는 투두 하나
export default function Todo({ item, deleteItem, updateItem }) {
  // console.log(item);
  const { id, title, done } = item;
  const [todoItem, setTodoItem] = useState(item);
  const [readOnly, setReadOnly] = useState(true);
  useEffect(() => {
    console.log('todo 업데이트');
    updateItem(todoItem);
  }, [todoItem]);
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
      //updateItem(todoItem); //엔터키 누르면 저장
    }
  };
  const checkboxEventHandler = (e) => {
    const { done, ...rest } = todoItem;
    const updatedItem = {
      done: e.target.checked,
      ...rest,
    };
    setTodoItem(updatedItem);
    //updateItem(updatedItem);
  };
  return (
    <div>
      <input
        type="checkbox"
        name={`todo${id}`}
        id={`todo${id}`}
        // checked={done}
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
