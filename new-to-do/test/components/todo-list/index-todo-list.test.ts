import { FILTER, IStore } from '../../../src/redux-utils/store/types';
import sinon from 'sinon';
import * as getToDoList from '../../../src/redux-utils/selectors/selectors';
import * as getSearchValue from '../../../src/redux-utils/selectors/selectors';
import * as getFilterValue from '../../../src/redux-utils/selectors/selectors';
import { mapStateToProps } from '../../../src/components/todo-list';

const getToDoListStub = sinon.stub(getToDoList, 'getToDoList').returns([
        {
            label: 'asd',
            important: false,
            done: false,
            id: '1dd30f7b-f8fa-4aa6-a847-86e2582436fa'
        }
    ]);
const getSearchValueStub = sinon.stub(getSearchValue, 'getSearchValue').returns('hello world');
const getFilterValueStub = sinon.stub(getFilterValue, 'getFilterValue').returns(FILTER.DONE);

describe('components/search-panel', () => {
    beforeEach(() => {
        sinon.resetHistory();
    });

    it('mapStateToProps test', () => {
        //Given
        const store = {} as IStore;
        const expected = {
            todoList: [{
                label: 'asd',
                important: false,
                done: false,
                id: '1dd30f7b-f8fa-4aa6-a847-86e2582436fa'
            }],
            searchValue: 'hello world',
            filterValue: FILTER.DONE,
        };

        //When
        const actual = mapStateToProps(store);

        //Then
        expect(actual).toEqual(expected);
        expect(getToDoListStub.calledOnceWithExactly(store)).toBeTruthy();
        expect(getSearchValueStub.calledOnceWithExactly(store)).toBeTruthy();
        expect(getFilterValueStub.calledOnceWithExactly(store)).toBeTruthy();
    })
});