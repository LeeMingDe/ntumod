import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import '../../styles/layout/navigation-tabs.scss';

const NavigationTabs = () => {
    const locationPath = useLocation().pathname;

    return (
        <nav className="nav-tabs-container">
            <ul className="nav-tabs-wrapper">
                <li className="nav-tabs-li">
                    <Link className="tabs-link" to="/module">
                        <div className={locationPath.includes("/module") ? "active-tabs-overlay tabs-title" : "tabs-title"}>
                            Modules
                        </div>
                    </Link>
                </li>
                {/* <li className="nav-tabs-li">
                    <div className={locationPath.includes("/contribute") ? "active-tabs-overlay tabs-title" : "tabs-title"}>
                        Contribute
                    </div>
                </li> */}
                <li className="nav-tabs-li">
                    <Link className="tabs-link" to="/about-us">
                        <div className={locationPath.includes("/about-us") ? "active-tabs-overlay tabs-title" : "tabs-title"}>
                            About us
                        </div>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavigationTabs;