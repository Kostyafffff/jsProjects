import React from 'react';
import sinon from 'sinon';
import {mount, shallow} from 'enzyme';
import {TodoListItemProps} from 'components/todo-list-item/types-todo-list-item';
import {TodoListItem} from 'components/todo-list-item/todo-list-item';

describe('src/components/todo-list-item/todo-list-item.tsx', () => {

    //Given
    const props: TodoListItemProps = {
        done: true,
        important: false,
        label: 'All',
        onDeleted: sinon.stub(),
        onToggleDone: sinon.stub(),
        onToggleImportant: sinon.stub(),
    };

    beforeEach(() => {
        sinon.resetHistory();
    });

    it('should TodoListItemProps mount component', () => {
        //When
        const wrapper = mount(<TodoListItem {...props} />);

        //Then
        expect(wrapper.isEmptyRender()).toBeFalsy();
    });

    it('should be defined', () => {
        //Then
        expect(TodoListItem).toBeDefined();
    });

    it.each`
        done        |   important   |   expectedClass
        ${false}    |   ${false}    |   ${'.todo-list-item'}
        ${true}     |   ${false}    |   ${'.todo-list-item.done'}
        ${false}    |   ${true}     |   ${'.todo-list-item.important'}
        ${true}     |   ${true}     |   ${'.todo-list-item.done.important.todo-list-item.done.important'}
        `('should render $expectedClass when done = $done important = $important', ({done, important, expectedClass}) => {
        //Given
        const currentProps: TodoListItemProps = {
            ...props,
            done,
            important,
        };

        //When
        const wrapper = mount(<TodoListItem {...currentProps} />);

        //Then
        expect(wrapper.find(expectedClass)).toHaveLength(1);
    });

    it('should have classNames with params', () => {
        //When
        const wrapper = shallow(<TodoListItem {...props}/>);

        //Then
        expect(wrapper.prop('className')).toStrictEqual('todo-list-item done');
    });

    it('should pass props to button', () => {
        //When
        const wrapper = mount(<TodoListItem {...props} />);

        //Then
        const button = wrapper.find('.btn.btn-outline-success.btn-sm');

        expect(button.prop('type')).toEqual('button');
        expect(button.prop('onClick')).toEqual(props.onToggleImportant);
    });

    it('should pass props item element', () => {
        //When
        const wrapper = mount(<TodoListItem {...props} />);

        //Then
        const label = wrapper.find('.todo-list-item-label');

        expect(label.prop('onClick')).toEqual(props.onToggleDone);
        expect(label.text()).toEqual(props.label);
    });

    it('should pass props to delete button', () => {
        //When
        const wrapper = mount(<TodoListItem {...props} />);

        //Then
        const label = wrapper.find('.btn.btn-outline-danger.btn-sm');

        expect(label.prop('onClick')).toEqual(props.onDeleted);
    });

    it('should pass props to delete button', () => {
        //When
        const wrapper = mount(<TodoListItem {...props} />);

        //Then
        const label = wrapper.find('.btn.btn-outline-danger.btn-sm');

        expect(label.prop('onClick')).toEqual(props.onDeleted);
    });

    it.each`
    expectedClass                 | expectedLength     
    ${'.btn.btn-outline-success'} |     ${1}                        
    ${'.btn.btn-outline-danger'}  |     ${1}                               
    ${'.fa.fa-exclamation'}       |     ${1}           
    ${'.fa.fa-trash-o'}           |     ${1}            
    ${'.todo-list-item-label'}    |     ${1}            
    ${'.button-wrapper'}          |     ${1}            
    ${'.button-wrapper > button'} |     ${2}            
    `('elements of list should have expected class $expectedClass with $expectedLength', ( {expectedClass, expectedLength} ) => {

        //Given
        const currentProps: TodoListItemProps = {
            ...props
        };

        const wrapper = mount(<TodoListItem {...currentProps} />);

        //When
        const element = wrapper.find(expectedClass);

        //Then
        expect(element).toHaveLength(expectedLength);
    });
});
