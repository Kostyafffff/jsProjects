import sinon from 'sinon';
import { mapStateToProps } from '../../../src/components/app-header';
import { IStore } from '../../../src/redux/store/types';

import * as selectors from '../../../src/redux/selectors/selectors';

const getToDoCountStub = sinon.stub(selectors, 'getToDoCount').returns(10);

const getDoneCountStub = sinon.stub(selectors, 'getDoneCount').returns(100);

describe('src/components/AppHeader', () => {

    beforeEach(() => {
        sinon.resetHistory();
    });

    it('mapStateToProps', () => {
        //Given
        const store = {} as IStore;

        const expected = {
            toDo: 10,
            done: 100
        };

        //When
        const actual = mapStateToProps(store);

        //Then
        expect(actual).toEqual(expected);
        expect(getDoneCountStub.calledOnceWithExactly(store)).toBeTruthy();
        expect(getToDoCountStub.calledOnceWithExactly(store)).toBeTruthy();
    })
});