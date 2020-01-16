import { FILTER } from 'redux-utils/store/types';
import { reducer } from 'redux-utils/reducers/reducer';

jest.mock('uuid/v4', () => () => 'uuid');

describe('redux/reducers', () => {
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

    it('onSetSearchValue test', () => {
        //Given
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

    it('setFilter test', () => {

        //Given
        const action = {
            type: 'SET_FILTER_VALUE',
            payload: FILTER.DONE
        };
        const actual = reducer(storeMock, action);

        //When
        const expected = {
            ...storeMock,
            filterBy: FILTER.DONE
        };

        //Then
        expect(actual).toEqual(expected);
    });

    it('onSetAddFieldValue test', () => {

        //Given
        const action = {
            type: 'SET_SEARCH_VALUE',
            payload: 'loremIpsum',
        };
        const actual = reducer(storeMock, action);

        //When
        const expected = {
            ...storeMock,
            searchField: 'loremIpsum',
        };

        //Then
        expect(actual).toEqual(expected);
    });

    it('onAddItem test', () => {

        //Given
         const action = {
             type: 'ADD_TODO_ITEM',
             payload: 'label',
         };

        const actual = reducer(storeMock, action);

        //When
        const expected = {
            ...storeMock,
            todoList: [...storeMock.todoList, {
                label: 'label',
                important: false,
                done: false,
                id: 'uuid'
            }]
        };

        //Then
       // expect(actual.todoList[1].done).toEqual(expected.todoList[1].done);
       // expect(actual.todoList[1].id).toEqual(expected.todoList[1].id);
       // expect(actual.todoList[1].important).toEqual(expected.todoList[1].important);
       // expect(actual.todoList[1].label).toEqual(expected.todoList[1].label);

       expect(actual).toEqual(expected);

       //expect(actual).toEqual(expected);
    });
});