import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import NotFoundPage from './pages/NotFoundPage';

function App() {

  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />     
          <Route path="/404" component={NotFoundPage} />
          <Redirect to="/404" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
