import { useState, useEffect } from 'react';
import Todo from './components/Todo';
import AddTodo from './components/AddTodo';
import axios from 'axios';
function App() {
  const api = process.env.REACT_APP_DB_HOST;
  const [todoItems, setTodoItems] = useState([]);
  const [numberOfTodos, setNumberOfTodos] = useState('');
  useEffect(() => {
    getTodos();
  }, []);
  const getTodos = async () => {
    const res = await axios.get(`${api}/todos`);
    const result = res.data;
    console.log(result);
    //done : false 갯수
    const todo = result.filter((item) => item.done !== true);
    setNumberOfTodos(todo.length);
    setTodoItems(result);
  };

  //todoItems 상태에 새로운 투두를 추가하는 일
  const addItem = async (Item) => {
    try {
      await axios.post(`${api}/todo`, {
        title: Item.title,
        done: false,
      });
      getTodos();
    } catch (err) {
      console.error(err);
    }
  };

  //todoItems 상태에 특정 투두를 삭제하는일
  const deleteItem = async (Item) => {
    try {
      await axios.delete(`http://localhost:8000/todo/${Item.id}`);
      getTodos();
    } catch (err) {
      console.error(err);
    }
  };
  const patchItem = async (Item) => {
    console.log('patchItem은', Item);
    try {
      const res = await axios.patch(`${api}/todo/${Item.id}`, {
        title: Item.title,
        done: Item.done,
      });
      getTodos();
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="App">
      <AddTodo addItem={addItem} />
      <div>해야할 일 : {numberOfTodos} 개</div>
      {/* todoItems 반복, props 데이터(투두 갹채)를 자식 컴포넌트에게 전달 */}
      {todoItems.map((item) => (
        <Todo
          key={item.id}
          item={item}
          deleteItem={deleteItem}
          patchItem={patchItem}
        />
      ))}
      {console.log(todoItems)}
    </div>
  );
}

export default App;
