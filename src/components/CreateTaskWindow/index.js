import React, { useContext, useState, memo, useCallback } from 'react';
import ReactDOM from 'react-dom';
import './CreateTaskWindow.css';

import { Calendar } from 'primereact/calendar';  
import "primereact/resources/themes/lara-light-blue/theme.css"; 
import 'primeicons/primeicons.css';
import { NewTaskContext } from '../../TaskContext/newTaskContext';


const TaskTitleInput = memo(() => {
    const {
        taskTitleValue,
        onTitleChange,
} = React.useContext(NewTaskContext);
    return (
      <input 
        className='task-title-input' 
        placeholder='Title 📚' 
        value={taskTitleValue} 
        onChange={onTitleChange} 
      />
    );
});

function CreateTaskWindow ({task}) {

    const {
            date,
            setDate,
            value,
            setValue,
            setWindowDisplay,
            states,
            categories,
            priority,
            onSubmit,
            windowStyle,
            onCategoryClick,
            categoriesChosen
    } = React.useContext(NewTaskContext);

    return ReactDOM.createPortal(
        <>
                <form className="create-window-main-container" style={windowStyle} onSubmit={onSubmit}>
                    <div className='task-title-exs-container'>
                        <TaskTitleInput  />
                        <i className='pi pi-times' onClick={setWindowDisplay}></i>
                    </div>
                    <div className='other-info-container'>
                        <textarea className='task-description-textarea'
                        value={value} 
                        onChange={(e) => setValue(e.target.value)} 
                        rows="4" 
                        cols="60" 
                        placeholder="Description ✨"
                        />

                        <div className='task-state-container'>
                            <p>State:</p>
                            <button type='button' className='task-state-button' >
                                <input type='checkbox' id='stateMenuCheckbox'></input>
                                <label htmlFor='stateMenuCheckbox'>
                                    <span htmlFor='stateMenuCheckbox' className='task-state-text'>{states[0]}</span>
                                    <i className='task-state-arrow-icon pi pi-angle-down'></i>
                                </label>
                                <ul className='task-state-menu'>
                                    {states.map((state, index) => (
                                        <li key={index} className='task-state-option'>{state}</li>
                                    ))}
                                </ul>
                            </button>
                        </div>

                        <div className='task-categories-container'>
                            <p>Categories:</p>
                            <button type='button' className='task-category-button'>
                                <input type='checkbox' id='categoriesMenuCheckbox'></input>
                                <label id='categories-menu' htmlFor='categoriesMenuCheckbox'>+</label>
                            <ul className='task-categories-menu'>
                                {categories.map((category, index) => (
                                    <li key={index} id={category} className='task-categories-option' onClick={() => onCategoryClick(category)}>{category}</li>
                                ))}
                            </ul>
                            </button>
                            <section className='task-chosen-categories-container'>
                                {categoriesChosen.map((category) => (
                                    <span key={category} id={category}  className='task-categories-option'>{category}</span>
                                ))}
                            </section>

                        </div>
                        <div className='task-priority-container'>
                            <p>Priority:</p>
                            <button type='button' className='task-priority-button' >
                                <input type='checkbox' id='priorityMenuCheckbox'></input>
                                <label htmlFor='priorityMenuCheckbox'>
                                    <span className='task-priority-text'>{priority[0]}</span>
                                    <i className='task-priority-arrow-icon pi pi-angle-down'></i>
                                </label>
                                <ul className='task-priority-menu'>
                                    {priority.map((priority, index) => (
                                        <li key={index} className='task-priority-option'>{priority}</li>
                                    ))}
                                </ul>
                            </button>
                        </div>
                        <div className='task-due-date'>
                                <div className="card flex flex-wrap gap-3 p-fluid">
                                    <div className="flex-auto">
                                        <label htmlFor="buttondisplay" className="font-bold block mb-2">
                                            Set Date:
                                        </label>

                                        <Calendar value={date} onChange={(e) => setDate(e.value)} showIcon  />
                                    </div>
                                    <div className="flex-auto">
                                        <label htmlFor="buttondisplay" className="font-bold block mb-2">
                                            Set Time:
                                        </label>

                                        <Calendar value={date} onChange={(e) => setDate(e.value)} showIcon timeOnly  icon={() => <i className="pi pi-clock" />} />
                                    </div>
                                </div>

                        </div>

                        <div className='task-buttons-container'>
                            <button type='button' onClick={setWindowDisplay} className='form-button' id='task-cancel-button'>Cancel</button>
                            <button type='submit' className='form-button' id='task-save-button'>Save</button>
                        </div>

                    </div>
                </form>
                <div className='overlay-popup' style={windowStyle} onClick={setWindowDisplay}></div>

        </>,
        document.getElementById('modal')
    );
}

export { CreateTaskWindow };