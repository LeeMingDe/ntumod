import React, { useState } from 'react';
import { useHistory } from 'react-router';

import '../../styles/layout/nav-searchbar.scss'

const NavSearchbar: React.FC = () => {
    const [searchInput, setSearchInput] = useState<string>("")
    const history = useHistory();

    const searchInputHandler = event => {
        setSearchInput(event.target.value);
    };

    const onKeyPressed = event => {
        if (event.key === "Enter") {
            event.preventDefault()
            event.stopPropagation();
            if (!!searchInput) {
                history.push(`/module?search=${searchInput}`);
                return;
            }
        }
    };

    return (
        <div className="searchbar-wrapper">
            <input
                className="search-input"
                placeholder="Search course code, title"
                onChange={searchInputHandler}
                value={searchInput}
                onKeyPress={onKeyPressed}
            ></input>
        </div>
    )
}

export default NavSearchbar;