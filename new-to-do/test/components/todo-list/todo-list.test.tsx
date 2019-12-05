// import { mount } from 'enzyme';
// import React from 'react';
// import sinon from 'sinon';
// import { TodoListItem } from '../../../src/components/todo-list-item/todo-list-item';
// import { TodoListProps } from '../../../src/components/todo-list/types-todo-list';
//
// describe('src/components/todo-list-item/todo-list-item.tsx', () => {
//
//     const toDoListProps: TodoListProps = {
//         todos: [ { label: 'all', done: false, important: true, id: 1 } ],
//         onDeleted: sinon.stub(),
//         onToggleImportant: sinon.stub(),
//         onToggleDone: sinon.stub(),
//     };
//
//     it('should TodoListItemProps mount component', () => {
//         //When
//         const wrapper = mount(<TodoListItem {...toDoListProps} />);
//
//         //Then
//         expect(wrapper.isEmptyRender()).toBeFalsy();
//     });
// });