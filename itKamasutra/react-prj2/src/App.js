import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Technologies} from "./Technologies";
import {Header} from "./Header";

const App = () => {
  return (
    <div className="App">
        <Header />
        <Technologies />
        <Result />
    </div>
  )
};

const Result = () => {
 return(
    <div className="spanchik">
        Return result
    </div>
 )
};

export default App;
