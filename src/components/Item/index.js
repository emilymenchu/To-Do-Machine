import './TodoItem.css';
import React from 'react';

const taskOptions = ['To-do', 'In Progress', 'Done']

function TodoItem({ task, onChangeState, onDelete, onTaskClick}) {

    const [taskMenuIsOpen, setTaskMenuIsOpen] = React.useState(false);

    const onTaskMenuClick = () => {
        setTaskMenuIsOpen(!taskMenuIsOpen);
    }

    const taskMenuRef = React.useRef(null);

    const handleTaskMenuClickOutside = (event) => {
        if (taskMenuRef.current && !taskMenuRef.current.contains(event.target)) {
        setTaskMenuIsOpen(false);
        }
    }

    React.useEffect(() => {
        document.addEventListener('click', handleTaskMenuClickOutside);

        return () => {
        document.removeEventListener('click', handleTaskMenuClickOutside);
        }
    }, []);

    
    const changeTaskState = (state) => onChangeState(task.id, state);

    const deleteTask = () => onDelete(task.id);

    const modifyTask = () => onTaskClick(task.id)

    return (
    <div className="task-container" onClick={() => onTaskClick(task)}>
        <li className='li-task-container'>
            <div className='title-ellipsis-container'>
                <p id="task-title">{task.text}</p>
                <div className='options-container-parent' onClick={(e) => e.stopPropagation()} ref={taskMenuRef}>
                        <i className='pi pi-ellipsis-v' onClick={onTaskMenuClick}></i>
                        {taskMenuIsOpen && (<OptionsMenu changeTaskState={changeTaskState} state={task.state} deleteTask={deleteTask} modifyTask={modifyTask} onTaskMenuClick={onTaskMenuClick}/>)}
                </div>
            </div>
            <div className='task-info'>
               {task.categories.length !== 0 && (<section className='categories-container'>
                    {task.categories.map((category, index) => {
                        return <span id={category} className='category-container' key={index}>{category}</span>;
                    } )}
                </section>)}
                <div className='priority-date-container'>
                    {task.dueDate && (<div className='due-date'>Deadline: {task.dueDate}</div>)}
                    <section className='priority-container'>
                        <p>Priority:</p>
                        <div id={task.priority} className='priority' >{task.priority}</div>
                    </section>
                </div>
            </div>
        </li>
    </div>
    );

  
}

function OptionsMenu ({ changeTaskState, state, deleteTask, modifyTask, onTaskMenuClick}) {

    const currentStateStyle = {
        background: 'var(--color-light-blue)',
        color: 'var(--color-cream)',
        borderRadius: '8px',
        fontWeight: 'bold'
    }
    return (
        <>
            <ul className='task-options' >
                        {taskOptions.map((option, index) => (
                            <li key={index} className='task-info-option' id={option}
                            onClick={() => changeTaskState(option)}
                            style={state === option ? currentStateStyle : {}}>{option}</li>
                        ))}
                        <div className='pencil-trash-container'>
                            <i  className='pi pi-pencil' onClick={() =>{
                                modifyTask(); 
                                onTaskMenuClick();
                            }}
                            ></i>
                            <i onClick={() => {
                                deleteTask();
                                onTaskMenuClick();
                            }} className='pi pi-trash' ></i>
                        </div>
                        </ul>
        </>
    )
}

export { TodoItem };