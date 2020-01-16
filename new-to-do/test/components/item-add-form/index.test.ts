import sinon from 'sinon';
import { mapStateToProps, mapDispatchToProps } from 'components/item-add-form';
import * as getAddItemValue from 'redux-utils/selectors/selectors';
import { IStore } from 'redux-utils/store/types';
import { addToDo, setAddFieldValue } from 'redux-utils/action-creators/action-creators';

const getAddItemValueStub = sinon.stub(getAddItemValue, 'getAddItemValue').returns('field value');

describe('components/item-add-form', () => {
    beforeEach(() => {
        sinon.resetHistory();
    });

    it('mapStateToProps', () => {
        //Given
        const store = {} as IStore;
        const expected = { fieldValue: 'field value' };

        //When
        const actual = mapStateToProps(store);

        //Then
        expect(actual).toEqual(expected);
        expect(getAddItemValueStub.calledOnceWithExactly(store)).toBeTruthy();
    });

    it('mapDispatchToProps test', () => {
        //Given
        const expectedMapDispatchToProps = {
            setAddFieldValue: setAddFieldValue,
            addToDo: addToDo,
        };

        //Then
        expect(mapDispatchToProps).toEqual(expectedMapDispatchToProps);
    });
});
