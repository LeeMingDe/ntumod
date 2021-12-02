import React, { useState } from 'react';

import '../styles/modules/module-search-bar.scss'

interface Props {
    setSearchInput: React.Dispatch<React.SetStateAction<string>>,
    searchInput: string
}
const ModuleSearchBar: React.FC<Props> = props => {

    const searchInputHandler = event => {
        props.setSearchInput(event.target.value);
    };

    const onKeyPressed = event => {
        if (event.key === "Enter") {
            event.preventDefault()
            event.stopPropagation();
        }
    };

    return (
        <div className="searchbar-wrapper">
            <input
                className="search-input"
                placeholder="Search course code, title"
                onChange={searchInputHandler}
                value={props.searchInput}
                onKeyPress={onKeyPressed}
            ></input>
        </div>
    )
}

export default ModuleSearchBar;