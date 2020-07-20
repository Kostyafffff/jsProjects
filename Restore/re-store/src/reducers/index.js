const initialState = {
    books:[
        {
            id: 1,
            title: 'Грокаем Алгоритмы',
            author: 'Адитья Бхаргава'
        },
        {
            id: 2,
            title: 'Расска',
            author: 'Адитья Бхаргава'
        },
    ]
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BOOKS_LOADED':
            return {
                books: action.payload
            }
        default:
            return state
    }
}

export default reducer;

