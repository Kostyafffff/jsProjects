import sinon from 'sinon';
import * as getFilterValue from 'redux-utils/selectors/selectors';
import { FILTER, IStore } from '../../../src/redux-utils/store/types';
import { mapDispatchToProps, mapStateToProps } from '../../../src/components/item-status-filter';
import { setFilter } from "../../../src/redux-utils/action-creators/action-creators";

const getFilterValueStub = sinon.stub(getFilterValue, 'getFilterValue').returns(FILTER.DONE);

describe('src/components/app-header', () => {
    beforeEach(() => {
        sinon.resetHistory();
    });

    it('mapStateToProps test', () => {
        //Given
        const store = {} as IStore;
        const expected = {filter: FILTER.DONE};

        //When
        const actual = mapStateToProps(store);

        //Then
        expect(actual).toEqual(expected);
        expect(getFilterValueStub.calledOnceWithExactly(store)).toBeTruthy();
    });

    it('mapDispatchToProps test', () => {
        //Given
        const expectedMapDispatchToProps = {
            onFilterChange: setFilter
        };

        //Then
        expect(mapDispatchToProps).toEqual(expectedMapDispatchToProps);
    });
});