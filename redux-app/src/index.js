import { createStore } from 'redux';

const inc = () => ({type: 'INC' });
const dec = () => ({type: 'DEC' });
const rand = (payload) => ({type: 'RANDOM', payload });

const reducer = (state = 0, action) =>{
    switch (action.type) {
        case 'INC' :
            return ++state;
        case 'DEC' :
            return --state;
        case 'RANDOM':
            return state + action.payload;

            default: return state;
    }
};

const store = createStore(reducer);

document.getElementById('dec').addEventListener('click', () => {
    store.dispatch(dec());
});

document.getElementById('inc').addEventListener('click', () => {
    store.dispatch(inc());
});

document.getElementById('random').addEventListener('click', () => {
    const payload = Math.floor(Math.random() * 10);
    store.dispatch(rand(payload));
});

const update = () => {
    document.getElementById('counter').innerHTML = store.getState();
};

store.subscribe(update);

