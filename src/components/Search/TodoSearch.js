import React from 'react';
import './TodoSearch.css'

function TodoSearch({
    searchValue,
    setSearchValue
}) {
    return (
        <section className='search-parent-container'>
            <div className="search-container">
                <input className="search-input" placeholder="Win a Nobel Prize" value={searchValue} onChange={(event) => {
                    console.log('Escribiste en el TodoSearch');
                    setSearchValue(event.target.value);
                }} />
                <button className="search-button"></button>
            </div>
        </section>
    );
}

export { TodoSearch };