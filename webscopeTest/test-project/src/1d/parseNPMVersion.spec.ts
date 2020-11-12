import { parseNPMVersion } from './parseNPMVersion';

describe('parseNPMVersion tests', () => {
    it('should return parsed object', () => {
        //Given
        const data = 'react@16.0.0';
        const expected = {'name': 'react', 'version': '16.0.0'};

        //When
        const actual = parseNPMVersion(data);

        //Then
        expect(actual).toEqual(expected);
    })

    it('should return parsed object with two @', () => {
        //Given
        const data = '@webscopeio/react-textarea-autocomplete@4.6.1';
        const expected = {'name': '@webscopeio/react-textarea-autocomplete', 'version': '4.6.1'};

        //When
        const actual = parseNPMVersion(data);

        //Then
        expect(actual).toEqual(expected);
    })
})
