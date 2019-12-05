import { mount } from 'enzyme';
import React, { ChangeEvent } from 'react';
import { ItemAddForm } from 'components/item-add-form/item-add-form';
import { IPropsItemAddForm } from 'components/item-add-form/types-item-add-form';
import sinon from 'sinon';

describe('src/components/item-add-form/item-add-form.tsx', () => {
    const onAddItemStub = sinon.stub();
    const props: IPropsItemAddForm = {
         onAddItem: onAddItemStub,
    };

    beforeEach(() => {
        sinon.resetHistory();
    });

    it('should TodoListItemProps mount component', () => {
        const wrapper = mount(<ItemAddForm {...props} />);

        expect(wrapper.isEmptyRender()).toBeFalsy();
    });

    it('onSubmit test', () => {
        //Given
        const wrapper = mount<ItemAddForm>(<ItemAddForm {...props}/>);
        wrapper.setState({ label: 'label' });
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
        expect(onAddItemStub.calledOnceWithExactly('label')).toBeTruthy();
        expect(wrapper.state('label')).toEqual('');
    });

    it('onLabelChange', () => {
        //Given
        const wrapper = mount<ItemAddForm>(<ItemAddForm {...props}/>);
        wrapper.setState({ label: '' });
        const { onLabelChange } = wrapper.instance();
        const element = {
          target: { value: 'myValue' }
        };

        //When
        onLabelChange(element as unknown as ChangeEvent<HTMLInputElement>);

        //Then
        expect(wrapper.state().label).toEqual('myValue');
    });
});
