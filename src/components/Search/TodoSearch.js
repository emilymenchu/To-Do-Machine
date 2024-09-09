import './TodoSearch.css'

function TodoSearch() {
    return (
        <section className='search-parent-container'>
            <div className="search-container">
                <input className="search-input" placeholder="Win a Nobel Prize" />
                <button className="search-button"></button>
            </div>
        </section>
    );
}

export { TodoSearch };