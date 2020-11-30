import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import { TextComponent } from '../text-component/TextComponent';
configure({adapter: new Adapter()});

describe('TextComponent tests',() => {
    it('should pass correct props to TextComponent', () => {
        //Given
        const text = 'someText';

        //When
        const wrapper = shallow(<TextComponent text={text} />)

        //Then
        expect(wrapper.props().children).toEqual(text);
    })
})
