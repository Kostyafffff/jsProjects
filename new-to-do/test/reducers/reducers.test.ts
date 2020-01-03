import { FILTER } from 'redux/store/types';
// import sinon from 'sinon';
import { reducer } from 'redux/reducers/reducer';

describe('redux/reducers', () => {

    // beforeEach(() => {
    //     sinon.resetHistory();
    // });

    it('setFilter test', () => {
        //Given
        const storeMock = {
            searchField: 'for test',
            addField: 'for test',
            todoList: [{
                label: 'asd',
                important: false,
                done: false,
                id: '1dd30f7b-f8fa-4aa6-a847-86e2582436fa'
            }],
            filterBy: FILTER.ACTIVE,
        };

        const action = {
                type: 'SET_SEARCH_VALUE',
                payload: 'value'
            };

        const actual = reducer(storeMock, action);

        //When
        const expected = {
            ...storeMock,
            searchField: 'value'
        };

        //Then
        expect(actual).toEqual(expected);
    });
});