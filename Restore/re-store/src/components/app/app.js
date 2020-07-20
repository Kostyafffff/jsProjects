import React from "react";
import withBookStoreService from "../hoc";

import { Switch, Route } from "react-router-dom";
import { HomePage, CartPage } from "../pages";

const App = ( { bookStoreService } ) => {

    return (
        <Switch>
            <Route
                path="/"
                component={HomePage}
                exact
            />
            <Route
                path="/cart"
                component={CartPage}
                exact
            />
        </Switch>
    );
}

export default withBookStoreService()(App);