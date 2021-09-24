import React from "react";
import { Link } from 'react-scroll';

import '../styles/layout/navigation-tabs.scss';

const ModuleDetailsNavTab = () => {
    return (
        <nav className="ps-5 pe-2 nav-tabs-container">
            <ul className="nav-tabs-wrapper">
                <li className="nav-tabs-li">
                    <div className="">
                        <Link 
                            className="tabs-title" 
                            to="details"
                            smooth={true}
                            duration={500}
                            spy={true}
                            activeClass="active-tabs-overlay"
                            offset={-120}
                        >
                            Details
                        </Link>
                    </div>
                </li>
                <li className="nav-tabs-li">
                    <div className="">
                        <Link 
                            className="tabs-title" 
                            to="prerequisites"
                            smooth={true}
                            duration={500}
                            spy={true}
                            activeClass="active-tabs-overlay"
                        >
                            Prerequisites
                        </Link>
                    </div>
                </li>
                <li className="nav-tabs-li">
                    <div className="">
                        <Link 
                            className="tabs-title" 
                            to="timetable"
                            smooth={true}
                            duration={500}
                            spy={true}
                            activeClass="active"
                        >
                            Timetable
                        </Link>
                    </div>
                </li>
                <li className="nav-tabs-li">
                    <div className="">
                        <Link 
                            className="tabs-title" 
                            to="reviews"
                            smooth={true}
                            duration={500}
                            spy={true}
                            activeClass="active-tabs-overlay"
                        >
                            Reviews
                        </Link>
                    </div>
                </li>
            </ul>
        </nav>
    )
};

export default ModuleDetailsNavTab;