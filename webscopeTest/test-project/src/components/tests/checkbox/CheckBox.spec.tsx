import * as React from 'react';

import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { CheckBox } from '../../checkbox/CheckBox';

configure({adapter: new Adapter()});

describe('CheckBox tests', () => {
    it('should render CheckBox with correct props', () => {
        //Given
        const defaultProps = {
            className: 'class',
        }

        //When
        const wrapper = shallow(<CheckBox {...defaultProps} />)

        //Then
        expect(wrapper.props().className).toEqual(defaultProps.className);
    })
})
