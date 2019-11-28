import * as React from 'react';
const sinon = require('sinon');
import { mount } from 'enzyme';
import { mult } from './functions'
import { TodoListItem } from './components/todo-list-item/todo-list-item';
import { TodoListItemProps } from './components/todo-list-item/types-todo-list-item';

describe('mult works', () => {
    it('should multiply 2 parameters', () => {
        //Given
        const a = 2;
        const b = 3;
        const expected = 6;

        //When
        const actual = mult(a, b);

        //Then
        expect(actual).toEqual(expected);
    });

    it('should mount component', () => {
        //Given
        const props: TodoListItemProps = {
            done: true,
            important: true,
            label: 'Label',
            onDeleted: sinon.stub(),
            onToggleDone: sinon.stub(),
            onToggleImportant: sinon.stub(),
        };

        //When
        const wrapper = mount(<TodoListItem {...props} />);

        //Then
        expect(wrapper.isEmptyRender()).toBeFalsy();

    });
});