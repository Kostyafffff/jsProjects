import React from "react";
import withBookStoreService from "../hoc";
import { Route, Switch } from 'react-router-dom';
import HomePage from "../pages/home-page";
import CartPage from "../pages/cart-page";

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