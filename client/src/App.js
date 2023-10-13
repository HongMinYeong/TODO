import { useState, useEffect } from 'react';
import Todo from './components/Todo';
import AddTodo from './components/AddTodo';
import axios from 'axios';
function App() {
  const [todoItems, setTodoItems] = useState([]);
  const todoLists = async () => {
    const response = await axios.get('http://localhost:8000/todos');
    const result = response.data;
    const item = result.map((list) => ({
      id: list.id,
      title: list.title,
      done: list.done,
    }));
    setTodoItems(item);
  };

  useEffect(() => {
    todoLists();
  }, []);

  //todoItems 상태에 새로운 투두를 추가하는 일
  const addItem = async (Item) => {
    try {
      const response = await axios.post('http://localhost:8000/todo', {
        title: Item.title,
        done: false,
      });

      console.log(response.data);
      todoLists();

      // setTodoItems((prev) => [...prev, newItem]);
    } catch (err) {
      console.error(err);
    }
  };

  //todoItems 상태에 특정 투두를 삭제하는일
  const deleteItem = async (Item) => {
    try {
      const response = await axios.delete(
        `http://localhost:8000/todo/${Item.id}`
      );
      console.log(response.data);
      todoLists();
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="App">
      <AddTodo addItem={addItem} />
      {/* todoItems 반복, props 데이터(투두 갹채)를 자식 컴포넌트에게 전달 */}
      {todoItems.map((item) => (
        <Todo key={item.id} item={item} deleteItem={deleteItem} />
      ))}
      {console.log(todoItems)}
    </div>
  );
}

export default App;
