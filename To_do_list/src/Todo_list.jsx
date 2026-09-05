import react, { useState } from 'react'


/**

 */
function ToDoList() {  
    /**
     * Added 2 usestate variables, task and setTask.
     * The initial state of taskes is an empty array. Later will be populated with tasks  (string) that the user adds to the list.
     */
    const [tasks, setTasks] = useState([]); /** set the initial state of tasks to an array of example tasks */
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

        if (newTask.trim() !== '') { /** check if the newTask is not empty or only whitespace */
        setTasks(t => [...t, newTask]); /** set the tasks state to a new array that includes all the previous tasks and the new task
                                        use updater function (t: the previouse state of task) */
        setNewTask(''); /** reset the newTask state to an empty string, so the input field is cleared after adding a task */
        }
    }
    /**
     * Function to delete a task from the list.
     * Indext: an integer representing the index of the task to be deleted in the tasks array.
     * @param {*} index 
     */
    function deleteTask(index) {

        const updatedTasks = tasks.filter((element, i) => i !== index); /** create a new array of tasks that excludes the task at the specified index, 
                                                                            if the current index is strictly not equal to the index we would like to delete ,    
                                                                             put in the new array of task.*/
        setTasks(updatedTasks); /** set the tasks state to the updated array of tasks, effectively removing the task at the specified index */
    }


    /**
     * Function to move a task up in the list.
     * @param {*} index 
     */
    function moveTaskUp(index) {  

        if(index > 0) { /** check if the index is greater than 0, meaning the task is not already at the top of the list */
            const updatedTasks = [...tasks]; /** create a copy of the tasks array */
            [updatedTasks[index ], updatedTasks[index -1]] =
            [updatedTasks[index - 1], updatedTasks[index]]; /** swap the task at the specified index with the task above it in the list */
            setTasks(updatedTasks); /** set the tasks state to the updated array of tasks, effectively moving the task up in the list */
        }
    }   

    /**
     * Function to move a task down in the list.
     * @param {*} index 
     */
    function moveTaskDown(index) {
        if(index < tasks.length -1) { /** check if the index is less than the last index of the tasks array, meaning the task is not already at the bottom of the list */
            const updatedTasks = [...tasks]; /** create a copy of the tasks array */
            [updatedTasks[index ], updatedTasks[index +1]] =
            [updatedTasks[index + 1], updatedTasks[index]]; /** swap the task at the specified index with the task above it in the list */
            setTasks(updatedTasks); /** set the tasks state to the updated array of tasks, effectively moving the task up in the list */
        }

    }

    return(
    <div className= "todo-list">

        <h1>To-DO-List </h1>
        
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

        <ol>
           {tasks.map((task, index) => 
            <li key={index}>
                <span className='text'>{task}</span>
                <button
                    className="delete-button"
                    onClick={() => deleteTask(index)} /** set the onClick event handler to the deleteTask function,
                    passing the index of the task to be deleted as an argument. 
                    Added the arrow function to stop the onclick event handler from running immidiatly */
                    >
                    Delete
                </button>
                <button
                    className="Move-up-button"
                    onClick={() => moveTaskUp(index)} /** set the onClick handler to the moveTaskUp function,
                     passing the index of the task to be moved*/
                    >
                    ⬆️
                </button>
                <button
                    className="Move-down-button"
                    onClick={() => moveTaskDown(index)} /** set the onClick handler to the moveTaskDown function,
                     passing the index of the task to be moved*/
                    >
                    ⬇️
                </button>

            </li>
           )} 
        </ol>

    </div>);
}
export default ToDoList