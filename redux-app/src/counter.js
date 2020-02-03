import React from 'react';
const Counter = ( { counter, inc, dec, rnd, clr } ) =>{
    return (
        <div className="jumbotron">
            <h2>{counter}</h2>
            <button
                onClick={dec}
                className="btn btn-primary btn-large">DEC</button>
            <button
                onClick={inc}
                className="btn btn-primary btn-large">INC</button>
            <button
                onClick={rnd}
                className="btn btn-primary btn-large">RANDOM</button>
            <button
                onClick={clr}
                className="btn btn-primary btn-large">CLR</button>
        </div>
    );
};

export default Counter;