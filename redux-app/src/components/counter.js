import React from 'react';
import { connect } from 'react-redux';
const Counter = ( { counter, inc, dec, rnd, clr, one, plus } ) =>{
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
            <button
                onClick={one}
                className="btn btn-primary btn-large">1</button>
            <button
                onClick={plus}
                className="btn btn-primary btn-large">+</button>
        </div>
    );
};

const mapStateToProps = (state) => ({
    counter: state
});

export default connect(mapStateToProps )(Counter);