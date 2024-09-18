import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TaskContext = React.createContext();

const states = ['To-do', 'In Progress', 'Done'];
const categories = ['Personal', 'School', 'Work', 'Church'];
const priority = ['Low', 'Medium', 'High'];

function TaskProvider ({ children }) {
  const {item:tasks, saveItem:setTasks, loading, error} = useLocalStorage('TASKS_V1', []);

  const [searchValue, setSearchValue] = React.useState('');

  const [taskWindowIsOpen, setTaskWindowIsOpen] = React.useState(false);

  const showTaskWindow = () => {
    setTaskWindowIsOpen(!taskWindowIsOpen);
  };

  const completedTasks = tasks.filter(task => task.state === states[2]).length;

  const totalTasks = tasks.length;

  const searchFilteredTasks = tasks.filter(task => task.text.toLowerCase().includes(searchValue.toLowerCase()));

  

  const changeTaskState = (id, state) => {
    const newTasks = [...tasks];
    const taskIndex = newTasks.findIndex(
      task => task.id === id
    )
    newTasks[taskIndex].state = state;
    setTasks(newTasks);
  }

  const deleteTask = (id) => {
    const newTasks = [...tasks];
    const taskIndex = newTasks.findIndex(
      task => task.id === id
    )
    newTasks.splice(taskIndex, 1)
    setTasks(newTasks);
  }
    return (
        <TaskContext.Provider value={{
            completedTasks, 
            totalTasks, 
            searchValue, setSearchValue,
            searchFilteredTasks,
            changeTaskState,
            deleteTask,
            showTaskWindow,
            taskWindowIsOpen,
            states,
            categories,
            priority, 
            loading, 
            error
        }}>
            {children} 
        </TaskContext.Provider>
    );
}

export { TaskContext, TaskProvider }