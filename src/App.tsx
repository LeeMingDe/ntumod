import React from 'react';
import Footer from './layout/Footer';

import NavBar from './layout/navbar/NavBar';
import ModulePageContainer from './modules/ModulePageContainer';

import './styles/app.scss'
import './styles/globalconstants/spacing.scss'

const App = () => {
    return (
        <div className="page-container">
            <div className="content-wrapper">
                <NavBar />
                  <main className="main-wrapper">
                    <div className="navigation-tabs">
                        test
                    </div>
                    <div>
                        <ModulePageContainer />
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
}

export default App;
