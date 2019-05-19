import React from 'react';
import { BrowserRouter as Router, Route, Link, BrowserRouter, Switch } from "react-router-dom";
import './styles/styles.scss';
import Main from './components/Main';
import Header from './components/Header';
import NotFoundPage from './components/NotFoundPage';
import Resume from './components/Resume';

const App: React.FC = () => {
  return (
    <Router>
      <Header/>
      <Switch>
          <Route path="/" component={Main} exact={true}/>
          <Route exact path="/Resume" component={Resume}/>
          <Route component={NotFoundPage}/>
      </Switch>
    </Router>
  );
}

export default App;
