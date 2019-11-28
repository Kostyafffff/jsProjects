import React from 'react';
import { mount } from 'enzyme';
import { mult } from '../src/functions'
import { TodoListItem } from '../src/components/todo-list-item/todo-list-item';
import { TodoListItemProps } from '../src/components/todo-list-item/types-todo-list-item';

describe('mult works', () => {
    it('name', () => {
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
            onDeleted: (): void => {},
            onToggleDone: (): void => {},
            onToggleImportant: (): void => {},
        };

        //When
        const wrapper = mount(<TodoListItem {...props} />);

        //Then
        expect(wrapper.isEmptyRender()).toBeFalsy();
    });
});