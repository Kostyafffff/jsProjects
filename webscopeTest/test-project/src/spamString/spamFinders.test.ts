import {hasSpam, isEndWithChar, replaceSpam, wordConverter} from "./spamFinders";

describe('spamFinders test', () => {
    it('should return true with spam words', () => {
        //Given
        const spamString = 'hello.,! World: baby';
        const spamWords = ['world', 'bllaaa'];

        //When
        const actual = hasSpam(spamString, spamWords);

        //Then
        expect(actual).toBeTruthy();
    })

    it('should return replace spam', () => {
       //Given
       const text = 'Lorem, ipsum. dolores reeeboot';
       const spam = ['ipsum'];
       const replaceWord = 'x';
       const expected = 'Lorem, x dolores reeeboot';

       const a = ['Lorem', '.'];

       //When
       const actual = replaceSpam(text, spam, replaceWord);

       //Then
       expect(actual).toEqual(expected);
    });

    it('should return converted word', () => {
        //Given
        const wordToConvert = 'Lorem. dolores';
        const replaceWord = 'XXX';

        const spam = ['lorem', 'dolores'];
        const resultWord = 'XXX. XXX';

        //When
        const actual = replaceSpam(wordToConvert, spam,  replaceWord);

        //Then
        expect(actual).toEqual(resultWord);
    });
})
