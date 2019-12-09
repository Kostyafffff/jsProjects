import { mount } from 'enzyme';
import sinon from 'sinon';
import { AppHeader } from '../../../src/components/app-header/app-header';
import * as React from 'react';
import { IProps } from '../../../src/components/app-header/types-app-header';

describe('src/components/app-header/app-header', () => {

    const props: IProps = {
        toDo: '',
        done: ''
    };

    beforeEach(() => {
        sinon.resetHistory();
    });

    it('should be defined', () => {
        //Then
        expect(AppHeader).toBeDefined();
    });

    it('should TodoListItemProps mount component', () => {

        //Given
        const wrapper = mount(<AppHeader {...props} />);

        expect(wrapper.isEmptyRender()).toBeFalsy();
    });

    it.each`
        expectedClass           | expectedLength
        ${'.app-header'}        | ${1}
        ${'.app-header > h1'}   | ${1}
        ${'.app-header > h2'}   | ${1}
     
        `('should render in AppHeader $expectedClass', ({expectedClass, expectedLength}) => {

        //Given
        const currentProps: IProps = {
            ...props
        };

        //When
        const wrapper = mount(<AppHeader {...currentProps} />);

        //Then
        expect(wrapper.find(expectedClass)).toHaveLength(expectedLength);
    });

    it.each`
        toDoActual    | doneActual | toDoExpected  | doneExpected       
        ${1}          | ${2}       |   ${1}        |   ${2}     
        ${'1'}        | ${'2'}     |   ${'1'}      |   ${'2'}     
        ${-1}         | ${-2}      |   ${-1}       |   ${-2}  
        ${1123}       | ${0}       |   ${1123}     |   ${0}            
        ${0}          | ${0}       |   ${0}        |   ${0} 
    `('Should change props of AppHeader', ({ toDoActual, doneActual, toDoExpected, doneExpected }) => {

        //Given
        const currentProps: IProps = {
            toDo: toDoActual,
            done: doneActual
        };

        //When
        const wrapper = mount(< AppHeader {...currentProps} />);

        //Then
        expect(wrapper.prop('toDo')).toEqual(toDoExpected);
        expect(wrapper.prop('done')).toEqual(doneExpected);
    })
});