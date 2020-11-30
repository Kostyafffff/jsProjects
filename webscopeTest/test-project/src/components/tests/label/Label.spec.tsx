import * as React from 'react';

import {configure, shallow} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import { Label } from '../../label/Label';

configure({adapter: new Adapter()});

describe('Label tests', () => {
    it('should render Label with correct props', () => {
        //Given
        const defaultProps = {
            className: 'className',
            text: 'text',
            type: 'type',
            value: 'value',
            placeholder: 'placeholder',
            onChange: () => {}
        }

        //When
        const wrapper = shallow(<Label {...defaultProps} />)

        //Then
        expect(wrapper.find('.className')).toHaveLength(1);
        expect(wrapper.childAt(0).text()).toEqual(defaultProps.text);
        expect(wrapper.childAt(1).props().type).toEqual(defaultProps.type);
        expect(wrapper.childAt(1).props().value).toEqual(defaultProps.value);
        expect(wrapper.childAt(1).props().placeholder).toEqual(defaultProps.placeholder);
        expect(wrapper.childAt(1).props().onChange).toEqual(defaultProps.onChange);
    })
})
