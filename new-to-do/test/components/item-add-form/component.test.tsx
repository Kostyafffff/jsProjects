import {mount, shallow} from 'enzyme';
import React, { ChangeEvent } from 'react';
import { ItemAddForm } from 'components/item-add-form/component';
import { IPropsItemAddForm } from 'components/item-add-form/types-item-add-form';
import sinon from 'sinon';

describe('src/components/item-add-form/item-add-form.tsx', () => {
    const setAddFieldValueStub = sinon.stub();
    const addToDoStub = sinon.stub();
    const props: IPropsItemAddForm = {
        fieldValue: 'field value',
        setAddFieldValue: setAddFieldValueStub,
        addToDo: addToDoStub,
    };

    beforeEach(() => {
        sinon.resetHistory();
    });

    it('should ItemAddForm mount component', () => {
        //When
        const wrapper = mount(<ItemAddForm {...props} />);

        //Then
        expect(wrapper.isEmptyRender()).toBeFalsy();
    });

    it('onSubmit test', () => {
        //Given
        const wrapper = mount<ItemAddForm>(<ItemAddForm {...props}/>);
        const { onSubmit } = wrapper.instance();
        const preventDefaultStub = sinon.stub();
        const event = {
            ...new Event('form'),
            preventDefault: preventDefaultStub,
        };

        //When
        onSubmit(event as unknown as React.FormEvent<HTMLFormElement>);

        //Then
        expect(preventDefaultStub.calledOnceWithExactly()).toBeTruthy();
        expect(addToDoStub.calledOnceWithExactly('field value')).toBeTruthy();
        expect(setAddFieldValueStub.calledOnceWithExactly('')).toBeTruthy();
    });

    it('onLabelChange check', () => {
        //Given
        const wrapper = mount<ItemAddForm>(<ItemAddForm {...props}/>);
        const { onLabelChange } = wrapper.instance();
        const element = {
          target: { value: 'myValue' }
        };

        //When
        onLabelChange(element as unknown as ChangeEvent<HTMLInputElement>);

        //Then
        expect(setAddFieldValueStub.calledOnceWithExactly('myValue')).toBeTruthy();
    });

    // селекторы
    it.each`
        expectedClass                                               | expectedLength
        ${'.item-add-form'}                                         | ${1}
        ${'.item-add-form-wrapper'}                                 | ${1}
        ${'.item-add-form-wrapper > input'}                         | ${1}
        ${'.item-add-form-wrapper > button'}                        | ${1}
        `('should render in AppHeader $expectedClass', ({expectedClass, expectedLength}) => {

        const currentProps = {
            ...props ,
            filter: 'active',
        };

        //When
        const wrapper = mount(<ItemAddForm {...currentProps} />);

        //Then
        expect(wrapper.find(expectedClass)).toHaveLength(expectedLength);
    });

    it('check placeholder text in add form', () => {
        //When
        const content = shallow(<ItemAddForm { ...props } />).find('.item-add-form-wrapper > input');

        //Then
        expect(content).toHaveLength(1);
        expect(content.props().placeholder).toEqual('Needs to be Done');
    });

    it('check add button text', () => {
        //Given
        const content = mount<ItemAddForm>(<ItemAddForm { ...props } />);
        //When

        const button = content.find('.add-item-element');
        //Then
        expect(button.text()).toEqual('Add');
    });
});
