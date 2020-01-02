import { FILTER } from '../../src/redux/store/types';
import sinon from 'sinon';
import { reducer } from "../../src/redux/reducers/reducers";
import { SET_FILTER_VALUE } from "../../src/redux/actions/constants";

describe('redux/reducers', () => {

    beforeEach(() => {
        sinon.resetHistory();
    });

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
                type: SET_FILTER_VALUE,
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
});