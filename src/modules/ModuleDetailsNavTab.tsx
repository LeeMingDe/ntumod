import React, { useState } from "react";
import { Link } from 'react-scroll';

import '../styles/layout/navigation-tabs.scss';

const ModuleDetailsNavTab = () => {
    const [ isInitialRender, setIsInitialRender ] = useState(true);

    const onActiveHandler = isActive => {
        setIsInitialRender(isActive);
    }

    return (
        <nav className="ps-2 me-3 nav-tabs-container">
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
                            onSetActive={() => onActiveHandler(true)}
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
                            onSetActive={() => onActiveHandler(false)}
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
                            onSetActive={() => onActiveHandler(false)}
                            offset={-65}
                        >
                            Timetable
                        </Link>
                    </div>
                </li>
                {/* <li className="nav-tabs-li">
                    <div className="">
                        <Link 
                            className="tabs-title" 
                            to="reviews"
                            smooth={true}
                            duration={500}
                            spy={true}
                            activeClass="active-tabs-overlay module-active-tabs-overlay"
                            onSetActive={() => onActiveHandler(false)}
                        >
                            Reviews
                        </Link>
                    </div>
                </li> */}
            </ul>
        </nav>
    )
};

export default ModuleDetailsNavTab;