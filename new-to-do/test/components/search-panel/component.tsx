import {mount, shallow} from 'enzyme';
import sinon from 'sinon';
import * as React from 'react';
import {IPropsSearchPanel} from '../../../src/components/search-panel/types';
import {SearchPanel} from "../../../src/components/search-panel/component";

describe('src/components/item-add-form/item-add-form.tsx', () => {

    const setSearchValueStub = sinon.stub();

    const props: IPropsSearchPanel = {
        fieldValue: 'hello',
        setSearchValue: setSearchValueStub
    };

    beforeEach(() => {
        sinon.resetHistory();
    });

    it('should TodoListItemProps mount component', () => {

        //Given
        const wrapper = mount(<SearchPanel {...props} />);

        //Then
        expect(wrapper.isEmptyRender()).toBeFalsy();
    });

    it('onSearchChange test', () => {

        //Given
        const term = 'loremIpsumText';
        const wrapper = mount<SearchPanel>(<SearchPanel {...props}/>);

        //When
        wrapper.setState( { term } );

        //Then
        expect(wrapper.state('term')).toEqual(term);
    });

    it.each`
        expectedClass                            | expectedLength
        ${'.form-control-wrapper'}               | ${1}
        ${'.flex-search-element'}                | ${1}
        ${'.flex-search-element .form-control'}  | ${1}
        ${'.flex-search-element > input'}        | ${1}
        `('should render $expectedClass', ( { expectedClass, expectedLength } ) => {

        //Given
        const currentProps: IPropsSearchPanel = {
            ...props
        };

        //When
        const wrapper = mount(<SearchPanel {...currentProps} />);

        //Then
        expect(wrapper.find(expectedClass)).toHaveLength(expectedLength);
    });

    it('check placeholder text in search form', () => {

        //When
        const content = shallow(<SearchPanel { ...props } />).find('.form-control.search.input');

        //Then
        expect(content).toHaveLength(1);
        expect(content.props().placeholder).toEqual('search');
    });
});