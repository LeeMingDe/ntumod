import React from 'react';

import NavBar from './layout/navbar/NavBar';
import ModulePageContainer from './modules/ModulePageContainer';

import './styles/app.scss'
import './styles/globalconstants/spacing.scss'

const App = () => {
    return (
        <div className="page_container">
            <div className="content_wrapper">
                <NavBar />
                  <main className="main_wrapper">
                    <div className="navigation-tabs">
                        test
                    </div>
                    <div>
                        <ModulePageContainer />
                    </div>
                </main>
            </div>
        </div>
    );
}

export default App;
