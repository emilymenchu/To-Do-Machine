import React from "react";
import { TodoCounter } from '../components/Counter';
import { TodoSearch } from '../components/Search';
import { TodoList } from '../components/List';
import { TodoItem } from '../components/Item';
import { CreateTodoButton } from '../components/CreateButton';
import { CreateTaskWindow } from '../components/CreateTaskWindow';
import { TaskLoading } from "../components/TasksLoading";
import { TaskError } from "../components/TaskError";

function AppUI ({ completedTasks, totalTasks, searchValue, setSearchValue, searchFilteredTasks, changeTaskState, deleteTask, showTaskWindow, taskWindowIsOpen, states, categories, priority, loading, error }) {
    return (
        <div className="main-background">

      {error && <TaskError />}


      <div className="main-container">
        <TodoCounter completed={completedTasks} total={totalTasks} />

        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>

      <section className="lists-container">

        {states.map((state, index) => (
          <TodoList key={index} state={state}>
            {loading && <TaskLoading cards={3}/>}
            {error && <TaskError />}
            {(!loading && searchFilteredTasks.length === 0) && <span>Create a new Task</span>}
            {searchFilteredTasks
            .filter((task) => task.state === state)
            .map((task) => (
              <TodoItem key={task.id} task={task} onChangeState={changeTaskState} onDelete={deleteTask}/>
            ))}
            
          </TodoList>
        ))}

      </section>
        

        <CreateTodoButton onClick={showTaskWindow}/>
      </div>
      
       <CreateTaskWindow isOpen={taskWindowIsOpen} onBackgroundClick={showTaskWindow} states={states} categories={categories} priority={priority}/>

    </div>
    );
}

export { AppUI };