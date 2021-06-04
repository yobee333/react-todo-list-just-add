//no import just here to accept todo prop which is destructured from the object's props ({ bcthis})
const Todo = ({ todo }) => {
    return (
        // returning the div with h2 that has the item's key value
        <div>
            <h2>{todo.item}</h2>
        </div>
    )
}

export default Todo //export

