const reducer = (state = 0, action) =>{
    switch (action.type) {
        case 'INC' :
            return ++state;
        case 'DEC' :
            return --state;
        case 'RANDOM':
            return state + action.payload;
        case 'CLEAR':
            return state = 0;

        default: return state;
    }
};

export default reducer;