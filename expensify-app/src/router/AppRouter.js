import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Dashboard, AddExpensePage, EditPage, HelpPage, Header, NotFoundPage } from '../components';

const AppRouter = () => (
    <BrowserRouter>
    <div>
        <Header/>
        <Switch>
            <Route path="/" component={Dashboard} exact={true}/>
            <Route path="/expense" component={AddExpensePage}/>
            <Route path="/edit/:id" component={EditPage}/>
            <Route path="/help" component={HelpPage}/>
            <Route component={NotFoundPage}/>
        </Switch>
    </div>
    </BrowserRouter>
);

export default AppRouter;