import { useState } from 'react' //hook
import Header from "./components/Header";
import List from "./components/List"
import AddTodo from "./components/AddTodo"

function App() {//or you can use an arrow function

  const [todos, setTodos] = useState([ //first is name of the state, second is function that callback the state
    //useState can be string, integer, anything--in this case it is an array of objects (common)
    {
      id: 1,
      item: "Drink Water",
    },
    {
      id: 2,
      item: "Make Healthy Dinner",
    },
    {
      id: 3,
      item: "Exercise",
    },
  ]);

  const addTodo = (todo) => {//takes in a todo, creates random number id, create new todo (todo is object), spreading out--removing outermost brackets of the array/object like a deck of cards
    const id = Math.ceil(Math.random()*100000)
    const newTodo = {id, ...todo}//...todo would hypothetically override a previous todo bc it's last
    setTodos([...todos, newTodo])//this is what changes our states. You are not allowed to manually mutate state! setTodos is defined in the Todo component
  }

  return (
    /*rendering div with name container.*/
    <div className="container">
      {/*rendering header component with title*/}
      <Header title="Todo List" />
      {/*rendering addTodo component giving onAdd event handler function object  */}
      <AddTodo onAdd={addTodo} />
      {/* list component passing down todos state as a prop */}
      <List todos={todos}/>
    </div>
  );
}

export default App; //exporting to our index.js
