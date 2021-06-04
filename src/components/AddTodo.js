import { useState } from 'react'//importing hook

const AddTodo = ({ onAdd }) => { //declaring AddTodo component, onAdd event handler destructured from props object
    const [item, setItem] = useState('')//destructuring item, callback function for when the item changes. Set initial state of item to an empty string

    const onSubmit = (e) => {//declaring onSubmit function which takes in an event object
        e.preventDefault()//prevent page refresh (by default it submits and refresh page but we don't want that to happen)
        onAdd({item})//function not declared here, given to us from previous destructuring, passing object

        setItem('')//takes value from input and clears it to empty string--reset the state
    }

    return (
        // returning form element with onSubmit event handler
        <form onSubmit={onSubmit}>
            <label>Add Todo:</label>
            <input 
                type="text" 
                placeholder="Todo Item"
                // creating input and giving it state of item into value property
                value={item}
                //anonymous function to the onChange event handler which takes event and calls setItem on event.target.value(similar to adding event listeners and getting stuff from dom in vanilla js). Whenever value in changed, it will set that item to that value. Controlled by user input
                onChange={ (e) => setItem(e.target.value)}
            /> 
            <input type="submit" value="Add Todo" />
        </form>
    )
}

export default AddTodo //export
