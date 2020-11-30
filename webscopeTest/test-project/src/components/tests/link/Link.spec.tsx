import * as React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Link } from '../../link/Link';

configure({adapter: new Adapter()});

describe('Link tests', () => {
    it('should render Link with correct props', () => {
        //Given
        const defaultProps = {
            linkText: 'link',
            url: 'url',
            className: 'class'
        }

        //When
        const wrapper = shallow(<Link {...defaultProps} />)

        //Then
        expect(wrapper.props().className).toEqual(defaultProps.className);
        expect(wrapper.props().href).toEqual(defaultProps.url);
        expect(wrapper.childAt(0).text()).toEqual(defaultProps.linkText);
    })
})
