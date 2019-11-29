import * as React from 'react';
import { mount } from 'enzyme';
import { TodoListItemProps } from './types-todo-list-item';
import { TodoListItem } from './todo-list-item';

describe('src/components/todo-list-item/todo-list-item.tsx', () => {
    it.each`
        done        |   important   |   expectedClass
        ${false}    |   ${false}    |   ${'.todo-list-item'}
        ${true}     |   ${false}    |   ${'.todo-list-item.done'}
        ${false}    |   ${true}     |   ${'.todo-list-item.important'}
        ${true}     |   ${true}     |   ${'.todo-list-item.done.important'}
    `('should render $expectedClass when done = $done important = $important', ({
        done,
        important,
        expectedClass,
    }) => {
        //Given
        const props: TodoListItemProps = {
            done,
            important,
            label: 'Label',
            onDeleted: (): void => {},
            onToggleDone: (): void => {},
            onToggleImportant: (): void => {},
        };

        //When
        const wrapper = mount(<TodoListItem {...props} />);

        //Then
        expect(wrapper.find(expectedClass)).toHaveLength(1);
    });

    it.each`
        a       |   b       |   c
        ${1}    |   ${2}    |   ${3}
        ${2}    |   ${2}    |   ${4}
    `('testName $a + $b = $c', ({ a, b, c }) => {
        //When
        const actual = a + b;

        //Then
        expect(actual).toEqual(c);
    });

    it.each([
        [1, 2, 3],
        [2, 2, 4],
    ])('testName %j + %j = %j', (a, b, c) => {
        //When
        const actual = a + b;

        //Then
        expect(actual).toEqual(c);
    });
});
