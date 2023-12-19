import { useState, useEffect, useRef } from 'react';
import '../styles/ToDoList.css'

const emptyListState = -1;

const TodoList = () => {
    const firstRenderFlag = useRef<boolean>(true);
    const [tasksChangeState, setTaskChangeState] = useState<string[][]>([]);
    const [currentTasksState, setCurrentTasksState] = useState(-1);
    const [taskText, setTaskText] = useState('');

    // #region Local storage implementation
    useEffect(() => {
        const storedHistory = JSON.parse(localStorage.getItem('taskHistory') ?? '[]') || [];
        const storedIndex = localStorage.getItem('currentIndex')
            ? parseInt(localStorage.getItem('currentIndex') ?? '-1', 10)
            : -1;
            
        setTaskChangeState(storedHistory);
        setCurrentTasksState(storedIndex);
    }, []);
    // #endregion

    // #region Local storage implementation
    useEffect(() => {
        if (!firstRenderFlag.current) {
            localStorage.setItem('taskHistory', JSON.stringify(tasksChangeState));
            localStorage.setItem('currentIndex', currentTasksState.toString());
        } else firstRenderFlag.current = false;
    }, [tasksChangeState, currentTasksState]);
    // #endregion
    
    const addTask = () => {
        const trimmedTask = taskText.trim();
        if (trimmedTask !== '') {
            let newTasksState = [[trimmedTask]];
            if (tasksChangeState.length > 0 && currentTasksState !== -1) {               
                newTasksState = [
                    ...tasksChangeState.slice(0, currentTasksState + 1),
                    [...tasksChangeState[currentTasksState], trimmedTask],
                ];
                
            }
            setTaskChangeState(newTasksState);
            setCurrentTasksState(newTasksState.length - 1);
            setTaskText('');
        }
    };

    const deleteTask = (index: number) => {
        const nonDeletedTasks = tasksChangeState[currentTasksState].filter((task) => tasksChangeState[currentTasksState].indexOf(task) !== index);
        const newChangeState = [
            ...tasksChangeState.slice(0, currentTasksState + 1),
            nonDeletedTasks
        ];
        setTaskChangeState(newChangeState);
        setCurrentTasksState(newChangeState.length - 1);
    };

    const undoAction = () => {
        if (currentTasksState > 0) {
            setCurrentTasksState(currentTasksState - 1);
        } else if (currentTasksState === 0) {
            setCurrentTasksState(emptyListState); 
        }
    };

    const redoAction = () => {
        if (currentTasksState < tasksChangeState.length - 1) {
            if(currentTasksState + 1 === tasksChangeState.length - 1 && tasksChangeState[tasksChangeState.length - 1].length === 0) return; 
            setCurrentTasksState(currentTasksState + 1);
        }
    };

    // #region Local storage implementation
    const resetState = () => {
        localStorage.clear();
        setTaskChangeState([]);
        setCurrentTasksState(0);
    }
    //#endregion

    return (
        <div className={'container'}>
            {/* <div className={'state'}>{`Task State ------>  ${JSON.stringify(tasksChangeState)} current step ------> ${currentTasksState}`}</div> */}
            <div className={'inputs'}>
                <h1>Undo/Redo ToDo List</h1>
                <input
                    type="text"
                    value={taskText}
                    onChange={(e) => setTaskText(e.target.value)}
                    placeholder="Add a new task"
                    onKeyDown={(e) => {                    
                        if (e.key === 'Enter') {
                            addTask()
                        }
                    }}
                    />
                <div>
                    <button onClick={undoAction}>Undo</button>
                    <button onClick={redoAction}>Redo</button>
                    <button onClick={resetState}>Reset</button>
                </div>
            </div>


            <div className={'todoList'}>
                {
                    tasksChangeState.length > 0 && currentTasksState !== emptyListState ? 

                        <ul>
                            {tasksChangeState[currentTasksState].map((task, index) => (
                                <li key={index}>
                                    <div className={'todoElement'}>
                                        {task}
                                        <button onClick={() => deleteTask(index)}>Delete</button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    : <></>
                }
            </div>  
        </div>
    );
};

export default TodoList;
