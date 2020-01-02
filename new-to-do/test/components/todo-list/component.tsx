import {mount} from 'enzyme';
import React from 'react';
import sinon from 'sinon';
import {TodoListProps} from '../../../src/components/todo-list/types-todo-list';
import { TodoList } from '../../../src/components/todo-list/component';
import {FILTER} from "../../../src/redux/store/types";

describe('src/components/todo-list/todo-list.tsx', () => {
    const onDeletedStub = sinon.stub();
    const onToggleImportantStub = sinon.stub();
    const onToggleDoneStub = sinon.stub();
    //Given
    const toDoListProps: TodoListProps = {
        todoList: [
                {
                    key: 'asssa',
                    label: 'all',
                    done: false,
                    important: true,
                    id: 'a8cde768-7227-477e-a26c-772f41b19a6f',
                },
            ],
        searchValue: 'hello world',
        filterValue: FILTER.ALL,
        onDeleted: onDeletedStub,
        onToggleImportant: onToggleImportantStub,
        onToggleDone: onToggleDoneStub,
    };

    beforeEach(() => {
        sinon.resetHistory();
    });

    it('should be defined', () => {
        //Then
        expect(TodoList).toBeDefined();
    });

    it('should TodoListItemProps mount component', () => {

        //When
        const wrapper = mount(<TodoList {...toDoListProps} />);

        //Then
        expect(wrapper.isEmptyRender()).toBeFalsy();
    });

    it.each`
        expectedClass              | expectedLength
        ${'.list-group.todo-list'} | ${1}
        ${'.list-group-item'}      | ${1}
        `('should render $expectedClass', ( { expectedClass, expectedLength } ) => {

        //Given
        const currentProps: TodoListProps = {
            ...toDoListProps
        };

        //When
        const wrapper = mount(<TodoList {...currentProps} />);

        //Then
        expect(wrapper.find(expectedClass)).toHaveLength(expectedLength);
    });
});