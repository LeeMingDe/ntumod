import React from 'react';
import { useLocation } from 'react-router-dom';

import '../../styles/layout/navigation-tabs.scss';

interface Props {

}

const NavigationTabs: React.FC<Props> = props => {
    const locationPath = useLocation().pathname;

    return (
        <div className="ps-5 pe-2">
            <div className="nav-tabs-wrapper">
                <div className={locationPath.includes("/module") ? "nav-tabs-active" : null}>
                    <div className={locationPath.includes("/module") ? "active-tabs-overlay active-tabs-module" : null}></div>
                    <div className="tabs-title">
                        Modules
                    </div>
                </div>
                <div className={locationPath.includes("/contribute") ? "nav-tabs-active" : null}>
                    <div className={locationPath.includes("/contribute") ? "active-tabs-overlay active-tabs-contribute" : null}></div>
                    <div className="tabs-title">
                        Contribute
                    </div>
                </div>
                <div className= {locationPath.includes("/setting") ? "nav-tabs-active" : null}>
                    <div className={locationPath.includes("/setting") ? "active-tabs-overlay active-tabs-settings" : null}></div>
                    <div className="tabs-title">
                        Settings
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavigationTabs;