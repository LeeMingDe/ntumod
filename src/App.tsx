import React from 'react';

import NavBar from './layout/navbar/NavBar';
import ModulePageContainer from './modules/ModulePageContainer';

import './styles/app.scss'
import './styles/globalconstants/spacing.scss'

const App = () => {
  return (
    <div className="Page-container">
        <div className="content-wrapper">
            <NavBar />
            <main>
                <ModulePageContainer />
            </main>
        </div>
    </div>
  );
}

export default App;
