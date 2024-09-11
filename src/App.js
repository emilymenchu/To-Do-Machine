import React from 'react';

import './App.css';

import { TodoCounter } from './components/Counter/TodoCounter';
import { TodoSearch } from './components/Search/TodoSearch';
import { TodoList } from './components/List/TodoList';
import { TodoItem } from './components/Item/TodoItem';
import { CreateTodoButton } from './components/CreateButton/CreateTodoButton';
import { CreateTaskWindow } from './components/CreateTaskWindow/CreateTaskWindow';

const states = ['To-do', 'In progress', 'Done'];
const categories = ['Personal', 'School', 'Work', 'Church'];
const priority = ['Low', 'Medium', 'High'];

const defaultTasks = [
  { id: 1, text: 'Slice Onion', description: '', state: states[0], categories: [categories[0]], priority: priority[0], dueDate: '24/10/2024'},
  { id: 2, text: 'Take Introduction to React Course and pass the exam', description: '', state: states[1], categories: [categories[1], categories[2], categories[0]], priority: priority[1], dueDate: '5/10/2024'},
  { id: 3, text: 'Cry with the scary cursed crier woman', description: 'She has been depressed', state: states[2], categories: [categories[0]], priority: priority[1], dueDate: '1/1/2025'},
  { id: 4, text: 'Buy cheese at the moon market', description: '', state: states[0], categories: [categories[0]], priority: priority[2], dueDate: '7/12/2024'},
  { id: 5, text: 'Set a meting with the president of Mars', description: '', state: states[0], categories: [categories[0]], priority: priority[2], dueDate: '7/12/2024'},
]


function App() {
  const [tasks, setTasks] = React.useState(defaultTasks);

  const [searchValue, setSearchValue] = React.useState('');

  const completedTasks = tasks.filter(task => task.state == states[2]).length;

  const totalTasks = tasks.length;

  const searchFilteredTasks = tasks.filter(task => task.text.toLowerCase().includes(searchValue.toLowerCase()));

  console.log('Los usuarios buscan ' + searchValue);

  return (
    <div className="main-background">

      <div className="main-container">
        <TodoCounter completed={completedTasks} total={totalTasks} />

        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>

      <section className="lists-container">

        {states.map((state, index) => (
        <TodoList key={index} state={state}>
          {searchFilteredTasks
          .filter((task) => task.state === state)
          .map((task) => (
            <TodoItem key={task.id} task={task}/>
          ))}
        </TodoList>
        ))}

      </section>
        

        <CreateTodoButton />
      </div>
      
      <CreateTaskWindow/>

    </div>
  );
}


export default App;
