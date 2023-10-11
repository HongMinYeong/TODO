import { useState } from 'react';
import Todo from './components/Todo';
import AddTodo from './components/AddTodo';
function App() {
  const [todoItems, setTodoItems] = useState([
    {
      id: 1,
      title: 'my todo1',
      done: false,
    },
    {
      id: 2,
      title: 'my todo2',
      done: false,
    },
    {
      id: 3,
      title: 'my todo3',
      done: true,
    },
    {
      id: 4,
      title: '배고픔',
      done: true,
    },
  ]);
  //todoItems 상태에 새로운 투두를 추가하는 일

  const addItem = (Item) => {
    // newItem.id = todoItems.length + 1;
    // newItem.done = false;
    const newItem = {
      id: todoItems.length + 1,
      title: Item.title,
      done: false,
    };
    console.log(newItem);
    setTodoItems((prev) => [...prev, newItem]);
  };
  return (
    <div className="App">
      <AddTodo addItem={addItem} />
      {/* todoItems 반복, props 데이터(투두 갹채)를 자식 컴포넌트에게 전달 */}
      {todoItems.map((item) => (
        <Todo key={item.id} item={item} />
      ))}
    </div>
  );
}

export default App;
