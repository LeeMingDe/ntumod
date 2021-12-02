import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../img/logo.png'
import '../../styles/layout/navbar.scss'
// import NavSearchbar from './NavSearchbar';

const terms = ["Semester 1", "Semester 2", "Special Term I", "Special Term II"]

const NavBar: React.FC = () => {
    const getAcademicPeriod = () => {
        const acadYear = `${new Date().getFullYear()}/${new Date().getFullYear() + 1}`;
        const month = new Date().getMonth();
        let term;
        const weekOfMonth = Math.ceil(new Date().getDate() / 7);
        console.log(weekOfMonth)
        if (month <= 3 || (month === 4 && weekOfMonth === 1)) {
            term = terms[0]
            return `Academic Year ${acadYear}\n${term}`
        }
        if (month === 4 || (month === 5 && weekOfMonth <= 2)) {
            term = terms[2]
            return `Academic Year ${acadYear}\n${term}`
        }
        if (month === 5 || (month === 6 && weekOfMonth <= 5)) {
            term = terms[3]
            return `Academic Year ${acadYear}\n${term}`
        }
        if (month >= 7 ) {
            term = terms[1]
            return `Academic Year ${acadYear}\n${term}`
        }
    }

    return (
        <nav className="navbar">
            <Link to="/module" className="logo">
                <div className="logo">
                    <img className ="logoImg" src={Logo} alt="logo"/>
                </div>
            </Link>
            {/* <div className="searchbar">
                <NavSearchbar />
            </div> */}
            <div className="academic-period">
                {getAcademicPeriod()}
            </div>
        </nav>
    )
}

export default NavBar;