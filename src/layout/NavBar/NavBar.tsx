import React from 'react';

import '../../styles/layout/navbar.scss'
import NavSearchbar from './NavSearchbar';

const NavBar: React.FC = () => {
    return (
        <nav className="Navbar">
            <div className="logo">
                LOGO
            </div>
            <div className="searchbar">
                <NavSearchbar />
            </div>
            <div className="academic-period">
                {`Academic Year 2020/21\nSpecial Term II, Week 6`}
            </div>
        </nav>
    )
}

export default NavBar;