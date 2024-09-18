import React, { useContext } from "react";
import { TodoCounter } from '../components/Counter';
import { TodoSearch } from '../components/Search';
import { TodoList } from '../components/List';
import { TodoItem } from '../components/Item';
import { CreateTodoButton } from '../components/CreateButton';
import { CreateTaskWindow } from '../components/CreateTaskWindow';
import { TaskLoading } from "../components/TasksLoading";
import { TaskError } from "../components/TaskError";
import { CreateTaskMessage } from "../components/CreateTaskMessage";
import { TaskContext } from "../TaskContext";
import { NewTaskProvider } from '../TaskContext/newTaskContext';

function AppUI () {
    const { error, taskWindowIsOpen } = useContext(TaskContext);
    return (
        <div className="main-background">
        
        {error && <TaskError />}

      <div className="main-container">

        <TodoCounter/>
          
        <TodoSearch/>


        <TaskContext.Consumer>
          {({
            states, loading, searchFilteredTasks, changeTaskState, deleteTask
          }) => (
            <section className="lists-container">

              {states.map((state, index) => (
                <TodoList key={index} state={state}>
                  {loading && <TaskLoading cards={3}/>}
                  {(!loading && searchFilteredTasks.length === 0) && <CreateTaskMessage state={state}/>}
                  {searchFilteredTasks
                  .filter((task) => task.state === state)
                  .map((task) => (
                    <TodoItem key={task.id} task={task} onChangeState={changeTaskState} onDelete={deleteTask}/>
                  ))}

                </TodoList>
              ))}

            </section>
          )}

        </TaskContext.Consumer>


        <CreateTodoButton />
        

      </div>

          {taskWindowIsOpen && (
            <NewTaskProvider>
              <CreateTaskWindow/>
            </NewTaskProvider>
            
            )}

    </div>
    );
}

export { AppUI };