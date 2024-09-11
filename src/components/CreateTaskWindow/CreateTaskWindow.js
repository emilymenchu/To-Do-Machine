import React, { useState } from 'react';
import './CreateTaskWindow.css';

import { Calendar } from 'primereact/calendar';  
import "primereact/resources/themes/lara-light-blue/theme.css"; 
import 'primeicons/primeicons.css';
        

const states = ['To-do', 'In progress', 'Done'];
const categories = ['Personal', 'School', 'Work', 'Church'];
const priority = ['Low', 'Medium', 'High'];


function CreateTaskWindow ({task}) {

    const [date, setDate] = useState();
    const [value, setValue] = useState();

    return (
        <>
        <section className="create-window-main-container">
            <input className='task-title-input' placeholder='Title 📚'></input>
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
                    <button className='task-state-button' >
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
                    <p>Priority:</p>
                    <button className='task-priority-button' >
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

            </div>
        </section>
        <div className='overlay-popup'></div>
        </>
    );
}

export { CreateTaskWindow };