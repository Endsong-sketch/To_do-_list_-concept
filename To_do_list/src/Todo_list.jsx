import react, { useState } from 'react'

function ToDoList() {  
    /**
     * Added 2 usestate variables, task and setTask.
     * The initial state of taskes is an empty array. Later will be populated with tasks  (string) that the user adds to the list.
     */
    const [tasks, setTasks] = useState(["Example Task 1", "Example Task 2", "Example Task 3"]); /** set the initial state of tasks to an array of example tasks */
     /*
    -create a new state for a new task.
    -newTask is whatever we are typing in the input field/textbox. or currently edditing.
    -useState('') is the initial state of newTask, which is an empty string. Later will be populated with the value of the input field/textbox.
    */
    const [newTask, setNewTask] = useState('');

    /**
     * Function to handle changes in the input field.
     * Updates the newTask state with the value from the input field.
     * this id for the textbox input field. when we type in something.
     */
    function handleInputeChange(event) {
        /**handel inpute change is tied to the onchange event handler */
        setNewTask(event.target.value); /** set the newTask state to the value of the input field, 
                                        so when user types in the text box it will change */
    }
    /**
     * Function to add a new task to the list.
     */
    function addTask(){

    }
    /**
     * Function to delete a task from the list.
     * Indext: an integer representing the index of the task to be deleted in the tasks array.
     * @param {*} index 
     */
    function deleteTask(index) {
    }

    /**
     * Function to move a task up in the list.
     * @param {*} index 
     */
    function moveTaskUp(index) {  

    }

    /**
     * Function to move a task down in the list.
     * @param {*} index 
     */
    function moveTaskDown(index) {

    }

    return(
    <div className= "todo-list">

        <h1>To-DO-List</h1>
        
        <div>
            <input
            type="text" /** set the type of the inpute to text */
            placeholder='Enter a task...' /** set the placeholder text for the input field */
            value={newTask} /** set the value of the input field to the newTask state */
            onChange={handleInputeChange} /** set the onChange event handler to the handleInputeChange function,  
                                        The onChange event handler is making a call back to handleInputeChange function. */
            />
            <button
                className="add-Button"
                onClick={addTask} /** set the onClick event handler to the addTask function */
                >
                Add Task
                
            </button>
        </div>

    </div>);
}
export default ToDoList