import sinon from 'sinon';
import { ItemStatusFilter } from 'components/item-status-filter/item-status-filter';
import  { mount } from 'enzyme';
import * as React from 'react';

describe('src/componentns/item-status-filter/item-status-filter', () => {
    const props = {
        filter: '',
        onFilterChange: sinon.stub()
    };

    beforeEach(() => {
       sinon.resetHistory();
    });

    it('Item status filter should be defined', () => {
        expect(ItemStatusFilter).toBeDefined();
    });

    it('should ItemStatusFilter mount component', () => {
        //When
        const wrapper = mount(<ItemStatusFilter {...props} />);

        //Then
        expect(wrapper.isEmptyRender()).toBeFalsy();
    });

    it.each`
        expectedClass                                       | expectedLength
        ${'.btn-group'}                                     | ${1}
        ${'.btn-group-wrapper'}                             | ${1}
        ${'.btn-group-wrapper .btn-outline-secondary'}      | ${2}
        ${'.btn-group-wrapper .btn-info'}                   | ${1}
        `('should render in AppHeader $expectedClass', ({expectedClass, expectedLength}) => {
        const currentProps = {
             ...props ,
            filter: 'active',
        };

        //When
        const wrapper = mount(<ItemStatusFilter {...currentProps} />);

        //Then
        expect(wrapper.find(expectedClass)).toHaveLength(expectedLength);
    });

    it.each`
        index   |   propName        |   expected
        ${0}    |   ${'className'}  |   ${'btn btn-outline-secondary'}
        ${0}    |   ${'accessKey'}  |   ${'all'}
        ${1}    |   ${'className'}  |   ${'btn btn-outline-secondary'}
        ${1}    |   ${'accessKey'}  |   ${'active'}
        ${2}    |   ${'className'}  |   ${'btn btn-outline-secondary'}
        ${2}    |   ${'accessKey'}  |   ${'done'}
    `('should render button at $index with prop $propName', ({
        index,
        propName,
        expected,
    }) => {
        //When
        const wrapper = mount(<ItemStatusFilter {...props} />);
        const buttons = wrapper.find('[type="button"]');

        //Then
        expect(buttons.at(index).prop(propName)).toEqual(expected);
    });

    it.each`
        index   |   text
        ${0}    |   ${'All'}
        ${1}    |   ${'Active'}
        ${2}    |   ${'Done'}
    `('should render button at $index with text $text', ({ index, text }) => {
        //Given
        const wrapper = mount<ItemStatusFilter>(<ItemStatusFilter {...props} />);
        const { onButtonClick } = wrapper.instance();

        //When
        const buttons = wrapper.find('[type="button"]');

        //Then
        expect(buttons.at(index).text()).toEqual(text);
        expect(buttons.at(index).prop('onClick')).toEqual(onButtonClick);
    });
});