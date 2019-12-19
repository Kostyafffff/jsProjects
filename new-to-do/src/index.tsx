import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/app/component';
import { store } from './redux/store/store';
import { Provider } from 'react-redux'

//@ts-ignore
window.store = store;

const rootElement =  document.getElementById('root');
ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
    rootElement
);