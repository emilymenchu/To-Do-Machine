import React, { useEffect } from "react";
import { TaskContext } from ".";
import { v4 as uuidv4 } from 'uuid';


const NewTaskContext = React.createContext();

function NewTaskProvider ({ children }) {
    
    
    const {tasks, setTasks, task, showTaskWindow:setWindowDisplay, states, categories, priority, deleteTask } = React.useContext(TaskContext);
    
    // Title logic
    const [taskTitleValue, setTaskTitleValue] = React.useState(task ? task.text : '');

    const onTitleChange = (event) => {
        setTaskTitleValue((event.target.value));
    }

    // Description Logic
    const [taskDescription, setTaskDescription] = React.useState(task ? task.description : '');

    const onDescriptionChange = (event) => {
        setTaskDescription((event.target.value).trim());
    }

    // Date Logic
    const [date, setDate] = React.useState(task && task.dueDate ? new Date(task.dueDate) : null);

    // Submit Logic

    const onSubmit = (event) => {
        event.preventDefault();
        saveTask();
        setWindowDisplay();
    }

    // Save Logic

    const saveTask = () => {
        if (task) {
        const taskIndex = tasks.findIndex(taskSelected => taskSelected.id === task.id);
             if (taskIndex !== -1) {
                const updatedTasks = [...tasks];
                updatedTasks[taskIndex] = {
                    id: task.id,
                    text: taskTitleValue.trim(),
                    description: taskDescription.trim(),
                    state: taskState,
                    categories: [...categoriesChosen],
                    priority: taskPriority,
                    dueDate: date ? date.toLocaleString() : null
                }
                setTasks(updatedTasks);
             } else {
                alert('Error updating task')
             }
        } else {
            const newTasks = [...tasks];
            newTasks.push({
                id: uuidv4(),
                text: taskTitleValue.trim(),
                description: taskDescription.trim(),
                state: taskState,
                categories: [...categoriesChosen],
                priority: taskPriority,
                dueDate: date ? date.toLocaleString() : null
            })
            setTasks(newTasks);
        }
    }

    const windowStyle = {
        display: 'flex'
    }

    // Menus display Logic

    // State Logic
    const [stateMenuIsOpen, setStateMenuIsOpen] = React.useState(false);

    const onStateMenuClick = () => {
        setStateMenuIsOpen(!stateMenuIsOpen);
    };

    const stateMenuRef = React.useRef(null);

    const handleStateMenuClickOutside = (event) => {
        if (stateMenuRef.current && !stateMenuRef.current.contains(event.target)) {
            setStateMenuIsOpen(false);
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleStateMenuClickOutside);

        return () => {
            document.removeEventListener('click', handleStateMenuClickOutside)
        }
    }, []);


     const [taskState, setTaskState] = React.useState(task ? task.state : states[0]);

     const onStateClick = (state) => {
         if (state !== taskState) {
             setTaskState(state);
            }
            onStateMenuClick();
     };

     // Categories Logic

    const [categoriesMenuIsOpen, setCategoriesMenuIsOpen] = React.useState(false);

    const onCategoriesMenuClick = () => {
        setCategoriesMenuIsOpen(!categoriesMenuIsOpen);
    };

    const categoriesMenuRef = React.useRef(null);

    const handleCategoriesMenuClickOutside = (event) => {
        if (categoriesMenuRef.current && !categoriesMenuRef.current.contains(event.target)) {
            setCategoriesMenuIsOpen(false);
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleCategoriesMenuClickOutside);

        return () => {
            document.removeEventListener('click', handleCategoriesMenuClickOutside)
        }
    }, []);


    const [categoriesChosen, setCategoriesChosen] = React.useState(task ? [...task.categories] : []);

    const onCategoryClick = (category) => {
        if (!categoriesChosen.includes(category)){
            setCategoriesChosen([...categoriesChosen, category]);
        }
    }
    const onCategoryXClick = (category) => {
        const newCategoriesChosen = [...categoriesChosen];
        const categoryIndex = newCategoriesChosen.findIndex(
            cat => cat === category
        )
        newCategoriesChosen.splice(categoryIndex, 1);
        setCategoriesChosen(newCategoriesChosen);
    }


    // Priority Logic

    const [priorityMenuIsOpen, setPriorityMenuIsOpen] = React.useState(false);

    const onPriorityMenuClick = () => {
        setPriorityMenuIsOpen(!priorityMenuIsOpen);
    };

    const priorityMenuRef = React.useRef(null);

    const handlePriorityMenuClickOutside = (event) => {
        if (priorityMenuRef.current && !priorityMenuRef.current.contains(event.target)) {
            setPriorityMenuIsOpen(false);
        }
    }

    useEffect(() => {
        document.addEventListener('click', handlePriorityMenuClickOutside);

        return () => {
            document.removeEventListener('click', handlePriorityMenuClickOutside)
        }
    }, []);


    const [taskPriority, setTaskPriority] = React.useState(task ? task.priority : priority[0]);

    const onPriorityClick = (priority) => {
        if (priority !== taskPriority) {
            setTaskPriority(priority);
        }
        onPriorityMenuClick();
    };



    return (
        <NewTaskContext.Provider 
        value={{
            task,
            date,
            setDate,
            taskTitleValue,
            setWindowDisplay,
            states,
            categories,
            priority,
            onSubmit,
            onTitleChange,
            windowStyle,
            onCategoryClick,
            categoriesChosen,
            onCategoryXClick,
            taskState,
            onStateClick,
            taskPriority,
            onPriorityClick,
            taskDescription,
            onDescriptionChange,
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
        }
        }>
            {children}
        </NewTaskContext.Provider>
    )
}

export { NewTaskContext, NewTaskProvider}