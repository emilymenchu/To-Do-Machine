import React, {memo} from 'react';
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
      <textarea 
        className='task-title-input' 
        placeholder='Title 📚' 
        value={taskTitleValue} 
        onChange={onTitleChange}
        required 
      />
    );
});

function CreateTaskWindow () {

    const {
            task,
            taskDescription,
            onDescriptionChange,
            date,
            setDate,
            setWindowDisplay,
            states,
            categories,
            priority,
            onSubmit,
            windowStyle,
            onCategoryClick,
            categoriesChosen,
            onCategoryXClick,
            taskState,
            onStateClick,
            taskPriority,
            onPriorityClick,
            onStateMenuClick,
            stateMenuRef,
            stateMenuIsOpen,
            onCategoriesMenuClick,
            categoriesMenuRef,
            categoriesMenuIsOpen,
            onPriorityMenuClick,
            priorityMenuRef,
            priorityMenuIsOpen,
            deleteTask
    } = React.useContext(NewTaskContext);


    return ReactDOM.createPortal(
        <>
                <form className="create-window-main-container" style={windowStyle} onSubmit={onSubmit}>
                    <div className='task-title-exs-container'>
                        <TaskTitleInput  />
                        <i className='pi pi-times pi-times1' onClick={setWindowDisplay}></i>
                    </div>
                    <div className='other-info-container'>
                        <textarea className='task-description-textarea'
                        value={taskDescription} 
                        onChange={onDescriptionChange} 
                        rows="4" 
                        cols="65" 
                        placeholder="Description ✨"
                        />

                        <div className='task-state-container'>
                            <p>State:</p>
                            <button type='button' className='task-state-button' ref={stateMenuRef}>
                                <label onClick={onStateMenuClick}>
                                    <span className='task-state-text'>{taskState}</span>
                                    <i className='task-state-arrow-icon pi pi-angle-down'></i>
                                </label>
                                {stateMenuIsOpen && (<ul className='task-state-menu'>
                                    {states.map((state, index) => (
                                        <li key={index} className='task-state-option' onClick={() => onStateClick(state)}>{state}</li>
                                    ))}
                                </ul>)}
                            </button>
                        </div>

                        <div className='task-categories-container'>
                            <p>Categories:</p>
                            <button type='button' className='task-category-button' ref={categoriesMenuRef}>
                                <label id='categories-menu' onClick={onCategoriesMenuClick}>+</label>
                                {categoriesMenuIsOpen && (<ul className='task-categories-menu'>
                                    {categories.map((category, index) => (
                                        <li key={index} id={category} className='task-categories-option' onClick={() => onCategoryClick(category)}>{category}</li>
                                    ))}
                                </ul>)}
                            </button>
                            <section className='task-chosen-categories-container'>
                                <div>
                                {categoriesChosen.map((category) => {
                                    return (
                                        <span key={category} id={category}  className='task-chosen-category'>{category}
                                            <i className='pi pi-times pi-times2' onClick={() => onCategoryXClick(category)}></i>
                                        </span>
                                )})}
                                    </div>
                            </section>

                        </div>
                        <div className='task-priority-container'>
                            <p>Priority:</p>
                            <button type='button' className='task-priority-button' id={taskPriority} ref={priorityMenuRef}>
                                <label onClick={onPriorityMenuClick}>
                                    <span className='task-priority-text '>{taskPriority}</span>
                                    <i className='task-priority-arrow-icon pi pi-angle-down'></i>
                                </label>
                               {priorityMenuIsOpen && (<ul className='task-priority-menu'>
                                    {priority.map((priority, index) => (
                                        <li key={index} className='task-priority-option' onClick={() => onPriorityClick(priority)}>{priority}</li>
                                    ))}
                                </ul>)}
                            </button>
                        </div>
                        <div className='task-due-date'>
                                <div className="card flex flex-wrap gap-3 p-fluid">
                                    <div className="flex-auto">
                                        <label htmlFor="buttondisplay" className="font-bold block mb-2">
                                            Set Date:
                                        </label>

                                        <Calendar dateFormat="dd/mm/yy"  value={date} onChange={(e) => setDate(e.target.value)} showIcon  />
                                    </div>
                                    <div className="flex-auto">
                                        <label htmlFor="buttondisplay" className="font-bold block mb-2">
                                            Set Time:
                                        </label>

                                        <Calendar value={date} onChange={(e) => setDate(e.target.value)} showIcon timeOnly  icon={() => <i className="pi pi-clock" />} />
                                    </div>
                                </div>

                        </div>

                        <div className='task-buttons-container'>
                            <div className='cancel-delete-form-buttons'>
                                <button type='button' onClick={setWindowDisplay} className='form-button' id='task-cancel-button'>Cancel</button>
                                {task && <button type='button' className='form-button' onClick={() => {deleteTask(task.id); setWindowDisplay();}}>
                                    <i className='pi pi-trash' ></i>
                                    </button>}
                            </div>
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