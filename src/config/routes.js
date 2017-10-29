import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../components/App/AppComponent';
import LoginContainer from '../components/Login';
import Main from '../components/Main/MainComponent';
import ClinicalOverview from '../components/ClinicalOverview/ClinicalOverviewContainer';
import AgendaContainer from '../components/Agenda';

const routes = () => (
  <BrowserRouter>
    <App>
      <Switch>
        <Route path="/login" component={LoginContainer} />
        <Route path="/">
          <Main>
            <Switch>
              <Route exact path="/" component={AgendaContainer} />
              <Route
                exact
                path="/patients/:id/clinical-overview"
                component={ClinicalOverview}
              />
            </Switch>
          </Main>
        </Route>
      </Switch>
    </App>
  </BrowserRouter>
);

export default routes;
