import React from 'react';

import '../../styles/layout/nav-searchbar.scss'

const NavSearchbar: React.FC = () => {
    return (
        <div className="searchbar-wrapper">
            <input
                className="search-input"
                placeholder="Search course code, title and description"
            ></input>
        </div>
    )
}

export default NavSearchbar;