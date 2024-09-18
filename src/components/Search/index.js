import React, { useContext } from 'react';
import './TodoSearch.css'
import { TaskContext } from '../../TaskContext';

function TodoSearch() {

    const { searchValue, setSearchValue } = useContext(TaskContext);

    return (
        <section className='search-parent-container'>
            <div className="search-container">
                <input className="search-input" placeholder="Win a Nobel Prize" value={searchValue} onChange={(event) => {
                    setSearchValue(event.target.value);
                }} />
                <button className="search-button">
                </button>
            </div>
        </section>
    );
}

export { TodoSearch };