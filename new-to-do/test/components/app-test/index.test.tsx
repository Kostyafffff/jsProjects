import * as React from 'react';
import { shallow } from 'enzyme';
import { App } from 'components/app';
import { AppHeader } from 'components/app-header'
import { ItemStatusFilter } from 'components/item-status-filter';
import { SearchPanel } from 'components/search-panel';
import { ItemAddForm } from 'components/item-add-form';
import { TodoList } from 'components/todo-list';

describe('src/components/App', () => {
    it('App component should be rendered', () => {
        //When
        const wrapper = shallow(<App />);

        //Then
        expect(wrapper.isEmptyRender()).toBeFalsy();
    });

    it.each`
        component
        ${ AppHeader }
        ${ ItemStatusFilter }
        ${ SearchPanel }
        ${ ItemAddForm }
        ${ TodoList }
    `('should render $component', ({ component }) => {
        //When
        const wrapper = shallow(<App />);

        //Then
        expect(wrapper.find(component)).toHaveLength(1);
    });
});