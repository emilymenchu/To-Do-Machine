import React from 'react';
import './CreateTaskWindow.css';

const states = ['To-do', 'In progress', 'Done'];
const categories = ['Personal', 'School', 'Work', 'Church'];
const priority = ['Low', 'Medium', 'High'];


function CreateTaskWindow ({task}) {

    return (
        <>
        <section className="create-window-main-container">
            <input className='task-title-input' placeholder='Title 📚'></input>
            <div className='other-info-container'>
                <input className='task-description-input' placeholder='Description ✨'></input>
                <div className='task-state-container'>
                    <p>State</p>
                    <button className='task-state-button' >
                        <input type='checkbox' id='stateMenuCheckbox'></input>
                        <label htmlFor='stateMenuCheckbox'>
                            <span htmlFor='stateMenuCheckbox' className='task-state-text'>{states[0]}</span>
                            <span className='task-state-arrow-icon'></span>
                        </label>
                        <ul className='task-state-menu'>
                            {states.map((state, index) => (
                                <li key={index} className='task-state-option'>{state}</li>
                            ))}
                        </ul>
                    </button>
                </div>

                <div className='task-categories-container'>
                    <p>Categories</p>
                    <button className='task-category-button'>
                        <input type='checkbox' id='categoriesMenuCheckbox'></input>
                        <label id='categories-menu' htmlFor='categoriesMenuCheckbox'>+</label>
                    <ul className='task-categories-menu'>
                        {categories.map((category, index) => (
                            <li key={index} id={category} className='task-categories-option'>{category}</li>
                        ))}
                    </ul>
                    </button>
                    <section className='task-chosen-categories-container'></section>

                </div>
                <div className='task-priority-container'>
                    <p>Priority</p>
                    <button className='task-priority-button' >
                        <input type='checkbox' id='priorityMenuCheckbox'></input>
                        <label htmlFor='priorityMenuCheckbox'>
                            <span htmlFor='priorityMenuCheckbox' className='task-state-text'>{states[0]}</span>
                            <span className='task-state-arrow-icon'></span>
                        </label>
                        <ul className='task-state-menu'>
                            {priority.map((priority, index) => (
                                <li key={index} className='task-state-option'>{priority}</li>
                            ))}
                        </ul>
                    </button>
                </div>
                <div className='task-due-date'></div>

            </div>
        </section>
        <div className='overlay-popup'></div>
        </>
    );
}

export { CreateTaskWindow };