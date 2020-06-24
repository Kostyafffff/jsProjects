const { fillTemplate } = require('./main')

describe('numPrettier(num, splitter)', () => {
    it('should return sum', () => {
        //Given
        const template = 'blah-blah-blah _x_ and again some cope of _y_ blah-blah';
        const values = [
                {
                    "name": "x",
                    "value": "hello"
                },
                {
                    "name": "y",
                    "value": "bye"
                }
        ];

        const expected = 'blah-blah-blah hello and again some cope of bye blah-blah';

        //When
        const actual = fillTemplate(template, values);

        //Then
        expect(actual).toEqual(expected);
    })
})