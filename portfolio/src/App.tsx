import React from 'react';
import { BrowserRouter as Router, Route, Link, BrowserRouter, Switch } from "react-router-dom";
import './styles/styles.scss';
import 'normalize.css/normalize.css';
import Main from './components/Main';
import Header from './components/Header';
import NotFoundPage from './components/NotFoundPage';

const App: React.FC = () => {
  return (
    <Router>
      <Header/>
      <Switch>
          <Route path="/" component={Main} exact={true}/>
          <Route component={NotFoundPage}/>
      </Switch>
    </Router>
  );
}

export default App;
