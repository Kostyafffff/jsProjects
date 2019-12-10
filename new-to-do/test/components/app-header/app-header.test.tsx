import { mount } from 'enzyme';
import sinon from 'sinon';
import { AppHeader } from 'components/app-header/app-header';
import * as React from 'react';
import { IProps } from 'components/app-header/types-app-header';

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

        //Then
        expect(wrapper.isEmptyRender()).toBeFalsy();
    });

    it.each`
        expectedClass           | expectedLength
        ${'.app-header.d-flex'} | ${1}
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
                h2         |toDo          | done
        ${' more to do, '} | ${'2'}       | ${'1'} 
        ${' more to do, '} | ${'-2'}      | ${'0'} 
        ${' more to do, '} | ${'23'}      | ${'431'} 
        ${' more to do, '} | ${'43'}      | ${'50'} 
        ${' more to do, '} | ${'231213'}  | ${'3123213'} 
       `('should check text in AppHeader $h1 and $h2', ({ h2, toDo, done }) => {
        const currentProps: IProps = {
            toDo,
            done
        };
        const wrapper = mount(<AppHeader { ...currentProps } />);

        //When
        expect(wrapper.find('h1').text()).toEqual('My ToDo List');
        expect(toDo + h2 + done)
            .toEqual(wrapper.find('h2').text());

        const point: string = '';
        point.length;
    });


    // it.each`
    //     toDoActual    | doneActual | toDoExpected  | doneExpected
    //     ${1}          | ${2}       |   ${1}        |   ${2}
    //     ${'1'}        | ${'2'}     |   ${'1'}      |   ${'2'}
    //     ${-1}         | ${-2}      |   ${-1}       |   ${-2}
    //     ${1123}       | ${0}       |   ${1123}     |   ${0}
    //     ${0}          | ${0}       |   ${0}        |   ${0}
    //     ${0}          | ${1123}    |   ${0}        |   ${1123}
    // `('Should change props of AppHeader', ({ toDoActual, doneActual, toDoExpected, doneExpected }) => {
    //
    //      //Given
    //     const currentProps: IProps = {
    //        toDo: toDoActual,
    //        done: doneActual
    //    };
    //
    //     //When
    //     const wrapper = mount(<AppHeader {...currentProps} />);
    //
    //     //Then
    //     expect(wrapper.prop('toDo')).toEqual(toDoExpected);
    //     expect(wrapper.prop('done')).toEqual(doneExpected);
    // })
});