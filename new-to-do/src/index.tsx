import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/app/component';
import { Provider } from 'react-redux';
import { createStore } from "redux";
import { reducer } from "./redux-utils/reducers/reducer";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(reducer, composeWithDevTools());

const rootElement =  document.getElementById('root');
ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
    rootElement
);