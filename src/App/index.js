import React from 'react';

import './App.css';
import { AppUI } from './AppUI';
import { TaskProvider } from '../TaskContext';



/*
  localStorage.removeItem('TASKS_V1');

  const states = ['To-do', 'In Progress', 'Done'];
  const categories = ['Personal', 'School', 'Work', 'Church'];
  const priority = ['Low', 'Medium', 'High'];

  const defaultTasks = [
    { id: 1, text: 'Slice Onion', description: '', state: states[0], categories: [categories[0]], priority: priority[0], dueDate: '9/21/2024, 8:00:00 AM'},
    { id: 2, text: 'Take Introduction to React Course and pass the exam', description: '', state: states[1], categories: [categories[1], categories[2], categories[0]], priority: priority[1], dueDate: '9/21/2024, 8:00:00 AM'},
    { id: 3, text: 'Cry with the scary cursed crier woman', description: 'She has been depressed', state: states[2], categories: [categories[0]], priority: priority[1], dueDate: '9/21/2024, 8:00:00 AM'},
    { id: 4, text: 'Buy cheese at the moon market', description: '', state: states[0], categories: [categories[0]], priority: priority[2], dueDate: '9/21/2024, 8:00:00 AM'},
    { id: 5, text: 'Set a meting with the president of Mars', description: '', state: states[0], categories: [categories[0]], priority: priority[2], dueDate: '9/21/2024, 8:00:00 AM'},
    { id: 6, text: 'Go for a walk in Jupiter', description: '', state: states[0], categories: [categories[0]], priority: priority[2], dueDate: '9/21/2024, 8:00:00 AM'},
  ]

  localStorage.setItem('TASKS_V1', JSON.stringify(defaultTasks));
 */



function App() {
  return (
    <TaskProvider>
        <AppUI/>
    </TaskProvider>
  );
}


export default App;
