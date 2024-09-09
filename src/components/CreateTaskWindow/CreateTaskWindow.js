import './CreateTaskWindow.css';

function CreateTaskWindow ({task}) {
    return (
        <>
        <section className="create-window-main-container">
            <input className='task-title-input' placeholder='Title'></input>
            <div className='other-info-container'>
                <input className='task-description-input' placeholder='I have to talk to
                 the Mars President and ask about how to rule the world. Then I should set
                 a meeting between all presidents, politic liders and the presidents of 
                 the rest of the planets in our solar system'></input>
                <div className='state-container'></div>

            </div>
        </section>
        <div className='overlay-popup'></div>
        </>
    );
}

export { CreateTaskWindow };