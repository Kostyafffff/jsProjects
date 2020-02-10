import { createStore, bindActionCreators } from 'redux';
import reducer from './reducer';
import * as actions from './actions';
import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './counter';

const store = createStore(reducer);
const { dispatch } = store;

const {
    inc,
    dec,
    rnd,
    clr,
    one,
    plus
    } = bindActionCreators(actions, dispatch);

const update = () => {
    ReactDOM.render(<Counter
            counter={store.getState()}
            inc={inc}
            dec={dec}
            clr={clr}
            rnd={() => {
                const value = Math.floor(Math.random() *  10);
                rnd(value);
            }}
            one={one}
        />,
        document.getElementById('root'));
};
update();
store.subscribe(update);


