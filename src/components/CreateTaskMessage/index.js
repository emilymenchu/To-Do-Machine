import React from "react";
import './CreateTaskMessage.css'

function CreateTaskMessage ({state}) {
    return (
        <section className="create-message-container">
            <div className={`create-message-img-container cm${state.replace(' ', '')}`}></div>
            <p className="create-message ">There are no task to be completed. Create a new one.</p>
        </section>
    );
}

export { CreateTaskMessage };