import React from 'react';

import './App.css'

import { TodoCounter } from './components/Counter/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/List/TodoList';
import { TodoItem } from './components/Item/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';

const states = ['To-do', 'In progress', 'Done'];
const categories = ['Personal', 'School', 'Work'];
const priority = ['Not important', 'Important', 'Super Important'];

const tasks = [
  { text: 'Slice Onion', description: '', state: states[0], categories: [categories[0]], priority: priority[0]},
  { text: 'Take Introduction to React Course', description: '', state: states[1], categories: [categories[1]], priority: priority[1]},
  { text: 'Cry with the scary cursed crier woman', description: 'She has been depressed', state: states[2], categories: [categories[0]], priority: priority[1] },
  { text: 'Buy cheese at the moon market', description: '', state: states[0], categories: [categories[0]], priority: priority[2]},
]

// const tasksToDo = [];
// const tasksInProgress = [];
// const tasksDone = [];

// function sortTasks() {


function App() {
  return (
    <div className="main-background">

      <div className="main-container">
        <TodoCounter completed={17} total={36} />

        <TodoSearch />

      <section className="lists-container">

        {states.map((state) => (
        <TodoList state={state}>
          {tasks
          .filter((task) => task.state ===state)
          .map((task) => (
            <TodoItem key={task.text} text={task.text} state={task.state}/>
          ))}
        </TodoList>
        ))}

      </section>
        

        <CreateTodoButton />
      </div>
      

    </div>
  );
}


export default App;
