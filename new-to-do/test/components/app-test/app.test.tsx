import { mount } from 'enzyme';
import * as React from 'react';
import sinon from 'sinon';
import { App } from "../../../src/components/app/App";
import {filter} from "minimatch";

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
        const text: string = 'wake up in hell';
        const instance = mount<App>(<App />).instance();
        const expected = {
            label: text,
            important: false,
            done: false,
            id: instance.maxId,
        };
        //When
        instance.onAddItem(text);

        expect(instance.state.toDoData[0]).toEqual(expected);
    });

    it('onToggleImportant check',() => {

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
        instance.onToggleImportant(103);

        //Then
        expect(instance.state.toDoData[0].important).toBeTruthy();
    });


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

    it('deleteItem check', () => {
        //Given
        const instance = mount<App>(<App />).instance();
        const expected: number = 0;

        //When
        instance.deleteItem(100);
        instance.deleteItem(101);
        instance.deleteItem(102);

        //Then
        expect(expected).toEqual(instance.state.toDoData.length);
    });


    it('onSearchChange check', () => {
        //Given
        const instance = mount<App>(<App />).instance();
    })

    //filter
    //search
    //toggleProperty
    //onSearhChange
    //onFilterChange
});