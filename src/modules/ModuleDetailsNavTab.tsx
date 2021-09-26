import React, { useState } from "react";
import { Link } from 'react-scroll';

import '../styles/layout/navigation-tabs.scss';

const ModuleDetailsNavTab = () => {
    const [ isInitialRender, setIsInitialRender ] = useState(true);

    const onActiveHandler = () => {
        setIsInitialRender(false);
    }

    return (
        <nav className="ps-5 pe-2 nav-tabs-container">
            <ul className="nav-tabs-wrapper module-nav-tabs">
                <li className="nav-tabs-li">
                    <div className="">
                        <Link 
                            className={isInitialRender ? "active-tabs-overlay module-active-tabs-overlay tabs-title" : "tabs-title"}
                            to="details"
                            smooth={true}
                            duration={500}
                            spy={true}
                            activeClass="active-tabs-overlay module-active-tabs-overlay"
                            offset={-500}
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
                            activeClass="active-tabs-overlay module-active-tabs-overlay"
                            onSetActive={onActiveHandler}
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
                            activeClass="active-tabs-overlay module-active-tabs-overlay"
                            onSetActive={onActiveHandler}
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
                            activeClass="active-tabs-overlay module-active-tabs-overlay"
                            onSetActive={onActiveHandler}
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