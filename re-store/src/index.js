import React from 'react';
import ReactDOM from 'react-dom';

import { App } from "./components/app";
import { Provider } from "react-redux";
import {BrowserRouter as Router} from 'react-router-dom';
import { store } from './store';
import { ErrorBoundary } from "./components/error-boundary";
import { BookStoreService } from "./services";
import { BookStoreServiceProvider } from "./components/book-store-service-context/BookStoreService";

const bookStoreService = new BookStoreService();

ReactDOM.render(
  <Provider store={store}>
      <ErrorBoundary>
          <BookStoreServiceProvider value={bookStoreService}/>
          <Router>
              <App/>
          </Router>
      </ErrorBoundary>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
