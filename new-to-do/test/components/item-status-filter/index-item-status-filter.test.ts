import sinon from 'sinon';
import * as getFilterValue from 'redux/selectors/selectors';
import { FILTER, IStore } from '../../../src/redux/store/types';
import { mapDispatchToProps, mapStateToProps } from '../../../src/components/item-status-filter';
import { setFilter } from "../../../src/redux/action-creators/action-creators";

const getFilterValueStub = sinon.stub(getFilterValue, 'getFilterValue').returns(FILTER.DONE);

describe('src/components/app-header', () => {
    beforeEach(() => {
        sinon.resetHistory();
    });

    it('mapStateToProps', () => {
        //Given
        const store = {} as IStore;
        const expected = {filter: FILTER.DONE};

        //When
        const actual = mapStateToProps(store);

        //Then
        expect(actual).toEqual(expected);
        expect(getFilterValueStub.calledOnceWithExactly(store)).toBeTruthy();
    });

    it('mapDispatchToProps', () => {
        //Given
        const expectedMapDispatchToProps = {
            onFilterChange: setFilter
        };

        //Then
        expect(mapDispatchToProps).toEqual(expectedMapDispatchToProps);
    });
});