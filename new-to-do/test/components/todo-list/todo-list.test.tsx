import { mount } from 'enzyme';
import React from 'react';
import sinon from 'sinon';
import { TodoListProps } from '../../../src/components/todo-list/types-todo-list';
import {Component} from "../../../src/components/todo-list/todo-list";

describe('src/components/todo-list/todo-list.tsx', () => {

    //Given
    const toDoListProps: TodoListProps = {
        todos: [ { key: 'asssa', label: 'all', done: false, important: true, id: 1, } ],
        onDeleted: sinon.stub(),
        onToggleImportant: sinon.stub(),
        onToggleDone: sinon.stub(),
    };

    beforeEach(() => {
        sinon.resetHistory();
    });

    it('should be defined', () => {
        //Then
        expect(Component).toBeDefined();
    });

    it('should TodoListItemProps mount component', () => {

        //When
        const wrapper = mount(<Component {...toDoListProps} />);

        //Then
        expect(wrapper.isEmptyRender()).toBeFalsy();
    });

    it.each`
        expectedClass              | expectedLength
        ${'.list-group-item'}      | ${1}
        ${'.list-group.todo-list'} | ${1}
        `('should render $expectedClass', ( { expectedClass } ) => {

        //Given
        const currentProps: TodoListProps = {
            ...toDoListProps
        };

        //When
        const wrapper = mount(<Component {...currentProps} />);

        //Then
        expect(wrapper.find(expectedClass)).toHaveLength(1);
    });
});