import { mount } from 'enzyme';
import * as React from 'react';
import sinon from 'sinon';
import { App } from 'components/app/App';

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
            id: 104,
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

    it('filter empty', () => {
        //Given
        const instance = mount<App>(<App />).instance();

        //When
        const actual = instance.filter([], 'active');

        //Then
        expect(actual).toEqual([]);
    });



    //filter
    //search
    //toggleProperty
});