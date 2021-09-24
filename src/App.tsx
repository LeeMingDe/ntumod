import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Footer from './layout/Footer';
import NavBar from './layout/navbar/NavBar';
import NavigationTabs from './layout/navtab/NavigationTabs';
import ModuleDetailsPage from './modules/ModuleDetailsPage';
import ModulePageContainer from './modules/ModulePageContainer';

import './styles/app.scss'
import './styles/globalconstants/spacing.scss'

const App = () => {
    const routes = (
        <Switch>
            <Route path="/module" exact>
                <ModulePageContainer />
            </Route>
            <Route path="/module/:modulecode/:moduletitle" exact>
                <ModuleDetailsPage />
            </Route>
            <Route path="/contribute" exact>
                <ModulePageContainer />
            </Route>
            <Route path="/setting" exact>
                <ModulePageContainer />
            </Route>
            <Redirect to="/module" />
        </Switch>
    );

    return (
        <BrowserRouter>
            <div className="page-container">
                <div className="content-wrapper">
                    <NavBar />
                    <main className="main-wrapper">
                        <div className="nav-tabs">
                            <NavigationTabs />
                        </div>
                        <div className="main-content">
                            { routes }
                        </div>
                    </main>
                </div>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
