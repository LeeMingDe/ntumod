import React from 'react';
import { useLocation } from 'react-router-dom';

import '../../styles/layout/navigation-tabs.scss';

const NavigationTabs = () => {
    const locationPath = useLocation().pathname;

    return (
        <nav className="nav-tabs-container">
            <ul className="nav-tabs-wrapper">
                <li className="nav-tabs-li">
                    <div className={locationPath.includes("/module") ? "active-tabs-overlay tabs-title" : "tabs-title"}>
                        Modules
                    </div>
                </li>
                <li className="nav-tabs-li">
                    <div className={locationPath.includes("/contribute") ? "active-tabs-overlay tabs-title" : "tabs-title"}>
                        Contribute
                    </div>
                </li>
                <li className="nav-tabs-li">
                    <div className={locationPath.includes("/setting") ? "active-tabs-overlay tabs-title" : "tabs-title"}>
                        Settings
                    </div>
                </li>
            </ul>
        </nav>
    );
}

export default NavigationTabs;