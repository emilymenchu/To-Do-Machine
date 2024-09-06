import './TodoList.css'

function TodoList({ children, state } ){
    return (
        <div className="list-parent">
            <p className="section-title">{state}</p>
            <section className="list-container">
                <ul class="task-list">
                    {children}
                </ul>
            </section>
        </div>
    );
}

export { TodoList };