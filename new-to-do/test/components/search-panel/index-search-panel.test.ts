import { IStore } from "../../../src/redux/store/types";
import sinon from "sinon";
import * as getSearchValue from 'redux/selectors/selectors';
import {mapDispatchToProps, mapStateToProps} from "../../../src/components/search-panel";
import {setSearchValue} from "../../../src/redux/action-creators/action-creators";
const getSearchValueStub = sinon.stub(getSearchValue, 'getSearchValue').returns('honey i will find you');

describe('src/components/search-panel', () => {
    beforeEach(() => {
        sinon.resetHistory();
    });

    it('mapStateToProps', () => {
        //Given
        const store = {} as IStore;
        const expected = { fieldValue:'honey i will find you' };

        //When
        const actual = mapStateToProps(store);

        //Then
        expect(actual).toEqual(expected);
        expect(getSearchValueStub.calledOnceWithExactly(store)).toBeTruthy();
    });

    it('mapDispatchToProps', () => {
        //Given
        const expectedMapDispatchToProps = {
            setSearchValue
        };

        //Then
        expect(mapDispatchToProps).toEqual(expectedMapDispatchToProps);
    });
});
