import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import NotFoundPage from './pages/NotFoundPage';
import Classes from './pages/Classes';
import PlansPrices from './pages/PlansPrices';
import Contacts from './pages/Contacts';
import SiteMap from './sitemap.xml';

function App() {

  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/classes' exact component={Classes} />
          <Route path='/plans&prices' exact component={PlansPrices} />
          <Route path='/contacts/1' exact component={Contacts} />
          <Route path='/contacts/2' exact component={NotFoundPage} />
          <Route path='/contacts/3' exact component={NotFoundPage} />
          <Route path='/sitemap.xml' exact component={SiteMap} />
          <Route path="/404" component={NotFoundPage} />
          <Redirect to="/404" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
