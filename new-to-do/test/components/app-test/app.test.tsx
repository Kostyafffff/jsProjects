import { mount } from 'enzyme';
import * as React from 'react';
import sinon from 'sinon';
import { App } from 'components/app/App';

// jest.mock(
//     'components/app-header/app-header',
//     () => (props: object): JSX.Element => (<div mock-id="app-header" {...props} />),
// );
jest.mock('components/app-header/app-header', () => ({
    AppHeader: (props: object): JSX.Element => (<div mock-id="app-header" {...props} />),
}));

jest.mock('components/search-panel/search-panel', () => ({
    SearchPanel: (props: object): JSX.Element => (<div mock-id="search-panel" {...props} />),
}));

jest.mock('components/item-status-filter/item-status-filter', () => ({
    ItemStatusFilter: (props: object): JSX.Element => (<div mock-id="item-status-filter" {...props} />),
}));

jest.mock('components/item-add-form/item-add-form', () => ({
    ItemAddForm: (props: object): JSX.Element => (<div mock-id="item-add-form" {...props} />),
}));

jest.mock('components/todo-list/todo-list', () => ({
    ToDoList: (props: object): JSX.Element => (<div mock-id="todo-list" {...props} />),
}));
const state = {
  toDoData: [
      sinon.stub(),
      sinon.stub(),
      sinon.stub(),
      'asd',
      'active'
  ]
};

describe('src/components/App/App', () => {
    beforeEach(() => {
        sinon.resetHistory();
    });

    it('App component should be rendered', () => {
        const wrapper = mount(<App {...state}/>);

        expect(wrapper.isEmptyRender()).toBeFalsy();
    });

    //createToDoItem
    it('createTodoItem check', () =>{
        //Given
        const label = 'asdasdas';
        const instance = mount<App>(<App />).instance();
        const expected = {
            label,
            important: false,
            done: false,
            id: instance.maxId,
        };

        //When
        const actual = instance.createTodoItem(label);

        //Then
        expect(actual).toEqual(expected);
        expect(instance.maxId).toEqual(104);
    });

    //onAddItem
    it('onAddItem check', () =>{
        //Given
        const text = 'wake up in hell';
        const instance = mount<App>(<App />).instance();
        const expected = {
            label: text,
            important: false,
            done: false,
            id: 103,
        };

        //When
        instance.onAddItem(text);

        expect(instance.state.toDoData[0]).toEqual(expected);
    });

    it('onToggleImportant check',() => {
        //Given
        const wrapper = mount<App>(<App />);
        const instance = wrapper.instance();
        const toDoData = [{
            label: 'hello',
            important: false,
            done: false,
            id: 99,
        }];
        const expected = {
            label: 'hello',
            important: true,
            done: false,
            id: 99,
        };
        wrapper.setState({ toDoData });

        //When
        instance.onToggleImportant(99);

        //Then
        expect(instance.state.toDoData[0]).toEqual(expected);
    });

    //same as onToggleImportant
    it('onToggleDone check',() => {
        //Given
        const instance = mount<App>(<App />).instance();
        const expected = {
            label: 'hello',
            important: false,
            done: false,
            id: 103,
        };

        //When
        instance.onAddItem(expected.label);
        instance.onToggleDone(103);

        //Then
        expect(instance.state.toDoData[0].done).toBeTruthy();
    });

    it('should have default state', () => {
        //Given
        const expected = {
            toDoData: [
                {
                    label: 'Setup React project ToDo List',
                    important: false,
                    done: false,
                    id: 100
                },
                {
                    label: 'Rewrite ToDo list with typescript',
                    important: false,
                    done: false,
                    id: 101
                },
                {
                    label: 'Create tests with Jest and Enzyme',
                    important: false,
                    done: false,
                    id: 102
                },
            ],
            term: '',
            filter: 'active',
        };

        //When
        const wrapper = mount<App>(<App />);

        //Then
        expect(wrapper.state()).toEqual(expected);
    });

    it('deleteItem check', () => {
        //Given
        const instance = mount<App>(<App />).instance();
        const expected: number = 0;

        //When
        instance.deleteItem(100);
        instance.deleteItem(101);
        instance.deleteItem(102);

        //Then
        expect(instance.state.toDoData.length).toEqual(expected);
    });

    it('onSearchChange check', () => {
        //Given
        const instance = mount<App>(<App />).instance();
        const expected = 'while';

        //When
        instance.onSearchChange(expected);

        //Then
        expect(instance.state.term).toEqual(expected);
    });

    it('onFilter change', () => {
        //Given
        const instance = mount<App>(<App />).instance();
        const expected = 'while';

        //When
        instance.onFilterChange(expected);

        //Then
        expect(instance.state.filter).toEqual(expected);
    });

    it('filter active', () => {
        //Given
        const expected = {
            label: 'Create tests with Jest and Enzyme',
            important: false,
            done: false,
            id: 102
        };
        const items = [
            {
                label: 'Setup React project ToDo List',
                important: false,
                done: true,
                id: 100
            },
            {
                label: 'Rewrite ToDo list with typescript',
                important: false,
                done: true,
                id: 101
            },
            expected,
        ];
        const instance = mount<App>(<App />).instance();

        //When
        const actual = instance.filter(items, 'active');

        //Then
        expect(actual).toEqual([expected]);
    });

    it('filter empty', () =>{
        //Given
        const instance = mount<App>(<App />).instance();

        //When
        const actual = instance.filter([], 'active');

        //Then
        expect(actual).toEqual([]);
    });

    it('filter done', () => {
        //Given
        const instance = mount<App>(<App />).instance();
        const items = [
            {
                label: 'Setup React project ToDo List',
                important: false,
                done: true,
                id: 100
            },
            {
                label: 'Rewrite ToDo list with typescript',
                important: false,
                done: true,
                id: 101
            }
        ];

        //When
        const actual = instance.filter(items, 'done');

        //Then
        expect([...actual]).toEqual([...items]);
    });

    it('search check', () =>{
        //Given
        const instance = mount<App>(<App />).instance();
        const items = [
            {
                label: 'Setup React project ToDo List',
                important: false,
                done: true,
                id: 100
            },
            {
                label: 'Rewrite ToDo list with typescript',
                important: false,
                done: true,
                id: 101
            },
            {
                label: 'Create tests with Jest and Enzyme',
                important: false,
                done: false,
                id: 102
            },
        ];
        const expected = [
            {
                label: 'Setup React project ToDo List',
                important: false,
                done: true,
                id: 100
            },
            {
                label: 'Rewrite ToDo list with typescript',
                important: false,
                done: true,
                id: 101
            },
        ];
        //When
        const actual = instance.search(items, 'todo');

        //Then
        expect(actual.length).toEqual(2);
        expect([...actual]).toEqual([...expected]);
    });

    it('should pass props to AppHeader', () => {
        //When
        const wrapper = mount<App>(<App />);

        //Then
        const header = wrapper.find('[mock-id="app-header"]');

        expect(header.prop('toDo')).toEqual(3);
        expect(header.prop('done')).toEqual(0);
    });

    it('should pass props to SearchPanel', () => {
        //Given
        const term = 'term';

        //When
        const wrapper = mount<App>(<App />);
        wrapper.setState({ term });
        const { onSearchChange } = wrapper.instance();

        //Then
        const search = wrapper.find('[mock-id="search-panel"]');

        expect(search.prop('term')).toEqual(term);
        expect(search.prop('onSearchChange')).toEqual(onSearchChange);
    });

    it('should pass props to ItemStatusFilter', () => {
        //Given
        const filter = 'todo';

        //When
        const wrapper = mount<App>(<App />);
        wrapper.setState({ filter });
        const { onFilterChange } = wrapper.instance();

        //Then
        const filterChange = wrapper.find('[mock-id="item-status-filter"]');
        expect(filterChange.prop('filter')).toEqual(filter);
        expect(filterChange.prop('onFilterChange')).toEqual(onFilterChange);
    });

    it('should pass props to ItemAddForm', () => {
        //Given
        const wrapper = mount<App>(<App />);

        //When
        const { onAddItem } = wrapper.instance();

        //Then
        const addItem = wrapper.find('[mock-id="item-add-form"]');
        expect(addItem.prop('onAddItem')).toEqual(onAddItem);
    });

    it('should pass props to ToDoList', () => {
        //Given
        const wrapper = mount<App>(<App />);
      //  const visibleItems = 'asdasdasd';

        //When
        const { deleteItem } = wrapper.instance();
        const { onToggleImportant } = wrapper.instance();
        const { onToggleDone } = wrapper.instance();

        //Then
        const addItem = wrapper.find('[mock-id="todo-list"]');
        expect(addItem.prop('onDeleted')).toEqual(deleteItem);
        // expect(addItem.prop('todos')).toEqual(visibleItems);
        expect(addItem.prop('onToggleImportant')).toEqual(onToggleImportant);
        expect(addItem.prop('onToggleDone')).toEqual(onToggleDone);
    })
});