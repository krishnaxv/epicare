import React from 'react';
import { Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import App from '../components/App/AppComponent';
import Main from '../components/Main/MainComponent';
// import Tabs from '../components/Tabs/Tabs';
import ClinicalOverview from '../components/ClinicalOverview/ClinicalOverviewContainer';
import { DayView } from '../Calendar';

const history = createBrowserHistory();

const routes = () => (
  <Router history={history}>
    <App>
      <Route exact path="/">
        <Main>
          <Route exact path="/" component={DayView} />
          <Route
            exact
            path="/patients/:id/clinical-overview"
            component={ClinicalOverview}
          />
        </Main>
      </Route>
    </App>
  </Router>
);

export default routes;
