import './TodoItem.css';
import React, { useState } from 'react';

const taskOptions = ['To-do', 'In Progress', 'Done']

function TodoItem({ task, onChangeState, onDelete}) {

    const [isOpen, setIsOpen] = useState(false);

    const toggleOptionsMenu = () => {
        setIsOpen(!isOpen)
    }

    const changeTaskState = (state) => onChangeState(task.id, state);

    const deleteTask = () => onDelete(task.id);

    return (
    <div className="task-container">
        <li className='li-task-container'>
            <div className='title-ellipsis-container'>
                <p id="task-title">{task.text}</p>
                <div className='options-container-parent'>
                        <i className='pi pi-ellipsis-v' onClick={toggleOptionsMenu}></i>
                        <OptionsMenu isOpen={isOpen} changeTaskState={changeTaskState} state={task.state} deleteTask={deleteTask}/>
                </div>
            </div>
            <div className='task-info'>
                <section className='categories-container'>
                    {task.categories.map((category, index) => {
                        return <span id={category} className='category-container' key={index}>{category}</span>;
                    } )}
                </section>
                <div className='priority-date-container'>
                    <div className='due-date'>Deadline: {task.dueDate}</div>
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

function OptionsMenu ({ isOpen, changeTaskState, state, deleteTask}) {
    const menuStyle = {
        display: 'flex'
    }

    const currentStateStyle = {
        background: 'var(--color-light-blue)',
        color: 'var(--color-cream)',
        borderRadius: '8px',
        fontWeight: 'bold'
    }
    return (
        <>
            {isOpen && (<ul className='task-options' style={menuStyle}>
                        {taskOptions.map((option, index) => (
                            <li key={index} className='task-info-option' id={option}
                            onClick={() => changeTaskState(option)}
                            style={state === option ? currentStateStyle : {}}>{option}</li>
                        ))}
                        <div className='pencil-trash-container'>
                            <i  className='pi pi-pencil' ></i>
                            <i onClick={deleteTask} className='pi pi-trash' ></i>
                        </div>
                        </ul>)}
        </>
    )
}

export { TodoItem };