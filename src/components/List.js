import Todo from './Todo'//importing todo component

const List = ({ todos }) => {//declaring what will be a component with capital L List
    return (
        <div>
          {/*mapping over todos array creating todo component for each today */}
          {todos.map((todo) => 
          // giving the Todo component a key which is id and the todo object
            <Todo key={todo.id} todo={todo} />
          )}  
        </div>
    )
}

export default List //exports

//this component is ready for all the todos and will export them to whoever