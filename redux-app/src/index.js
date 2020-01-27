import { createStore, bindActionCreators } from 'redux';
import reducer from './reducer';
import { inc, dec, rand } from "./actions";
const { dispatch } = store;

const bindActionCreator = (creator, dispatch) => (...args) => {
    dispatch(creator(...args));
};

const incDispatch = () => bindActionCreator(inc, dispatch);
const decDispatch = () => bindActionCreator(dec, dispatch);
const rndDispatch = payload => bindActionCreator(rnd, dispatch);

const store = createStore(reducer);

document.getElementById('dec').addEventListener('click', decDispatch);

document.getElementById('inc').addEventListener('click', incDispatch);

document.getElementById('rnd').addEventListener('click', rndDispatch);

const update = () => {
    document.getElementById('counter').innerHTML = store.getState();
};

store.subscribe(update);

