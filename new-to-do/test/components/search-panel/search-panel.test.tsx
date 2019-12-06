import { mount } from 'enzyme';
import { SearchPanel } from 'components/search-panel/search-panel';
import sinon from 'sinon';
import { IPropsSearchPanel } from '../../../src/components/search-panel/types-search-panel';
import * as React from 'react';

describe('src/components/item-add-form/item-add-form.tsx', () => {

    const props: IPropsSearchPanel = {
        term: '',
        onSearchChange: sinon.stub()
    };

    beforeEach(() => {
        sinon.resetHistory();
    });

    it('should TodoListItemProps mount component', () => {

        //Given
        const wrapper = mount(<SearchPanel {...props} />);

        expect(wrapper.isEmptyRender()).toBeFalsy();
    });

    it('onSearchChange test', () => {

        //Given
        const term = 'loremIpsumText';
        const wrapper = mount<SearchPanel>(<SearchPanel {...props}/>);

        //When
        wrapper.setState( { term } );

        props.onSearchChange( term );

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
});