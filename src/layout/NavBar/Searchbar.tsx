import React from 'react';

import '../../styles/layout/searchbar.scss'

const Searchbar = () => {
    return (
        <div className="Searchbar_wrapper">
            <input
                className="search-input"
                placeholder="Search course code, title and description"
            ></input>
        </div>
    )
}

export default Searchbar;