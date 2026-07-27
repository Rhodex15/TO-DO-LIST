import { useState } from "react";

function Todo(){
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState("");

    const [edit, setEdit] =  useState(null);
    const [editText, setEditText] = useState("");

    function taskValue(e){
        setTask(e.target.value);
    }

    function addTask(){
        setTasks(t => [...t, task]);
    }

    function removeTask(index){
        setTasks(t => t.filter((c,i) => index !== i));
    }

    function editTask(index){
        setEdit(index);       
        setEditText(tasks[index]);
    }

    function setNewEdit(index){
        setTasks((t) => t.map((item, i) => (i === index ? editText : item))
    );
        setEdit(null);
    }

    return(
        <div>
            <h1>TO DO LIST</h1>
            <input type="text" value={task} onChange={taskValue}/>
            <button onClick={addTask}>Add Task</button>
            <ul>
                {tasks.map((c, i) => 
                <li key={i}>
                    {edit === i ?  (
                        <> 
                            <input type="text" value={editText} onChange={(e) => setEditText(e.target.value)}/>
                            <button onClick={() => setNewEdit(i)}>Save</button>
                            <button onClick={() => setEdit(null)}>Cancel</button>
                        </>
                    ): 
                    (<>
                        <span>{c}</span>
                        <button onClick={() => removeTask(i)}>Remove Task</button>
                        <button onClick={() => editTask(i)}>Edit Task</button>
                    </>)
                    }
                </li>)}
                    
            </ul>
        </div>
    )
}

export default Todo;