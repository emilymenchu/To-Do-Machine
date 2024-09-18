import React, { useState } from "react";
import { TaskContext } from ".";

const NewTaskContext = React.createContext();

function NewTaskProvider ({ children, task }) {
    const [date, setDate] = React.useState();
    const [value, setValue] = React.useState();

    const [taskTitleValue, setTaskTitleValue] = React.useState('');

    const { showTaskWindow:setWindowDisplay, states, categories, priority } = React.useContext(TaskContext);

    const onSubmit = (event) => {
        event.preventDefault();
        setWindowDisplay();
    }

    const onTitleChange = (event) => {
        setTaskTitleValue(event.target.value);
    }

    const windowStyle = {
        display: 'flex'
    }

    const categoriesChosenList = [];

    if (task || task !== undefined) {

    } else {
        console.log('hi');
    }
    const [categoriesChosen, setCategoriesChosen] = React.useState(categoriesChosenList);

    const onCategoryClick = (category) => {
        if (!categoriesChosenList.includes(category)){
            categoriesChosenList.push(category);
            setCategoriesChosen(categoriesChosenList);
        }
        console.log(categoriesChosen)
    }

    return (
        <NewTaskContext.Provider 
        value={{
            date,
            setDate,
            value,
            setValue,
            taskTitleValue,
            setTaskTitleValue,
            setWindowDisplay,
            states,
            categories,
            priority,
            onSubmit,
            onTitleChange,
            windowStyle,
            onCategoryClick,
            categoriesChosen
        }
        }>
            {children}
        </NewTaskContext.Provider>
    )
}

export { NewTaskContext, NewTaskProvider}