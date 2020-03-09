import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './components/App';
import AboutPage from './components/AboutPage';
import Header from './components/Header';
import NotFoundPage from './components/NotFoundPage';
import ResourcesPage from './components/ResourcesPage';
import SurveyPage from './components/SurveyPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={App} exact={true} />
        <Route path="/resources" component={ResourcesPage} />
        <Route path="/survey" component={SurveyPage} />
        <Route path="/about" component={AboutPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;