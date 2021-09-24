import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/layout/navbar.scss'
import NavSearchbar from './NavSearchbar';

const NavBar: React.FC = () => {
    return (
        <nav className="navbar">
            <Link to="/module" className="logo">
                <div className="logo">
                    LOGO
                </div>
            </Link>
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