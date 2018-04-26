import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainPage from "../components/MainPage";
import { PageNotFound } from "../components/index";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={MainPage} exact={true} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
