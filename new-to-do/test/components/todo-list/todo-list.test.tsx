import { mount } from 'enzyme';
import React from 'react';
import sinon from 'sinon';
import { TodoListProps } from '../../../src/components/todo-list/types-todo-list';
import {ToDoList} from "../../../src/components/todo-list/todo-list";

describe('src/components/todo-list-item/todo-list-item.tsx', () => {

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
        expect(ToDoList).toBeDefined();
    });

    it('should TodoListItemProps mount component', () => {

        //When
        const wrapper = mount(<ToDoList {...toDoListProps} />);

        //Then
        expect(wrapper.isEmptyRender()).toBeFalsy();
    });

});