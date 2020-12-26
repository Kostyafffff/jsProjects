import {hasSpam, isEndWithChar, replaceSpam, replaceSpam2, wordConverter} from "./spamFinders";

describe('spamFinders test', () => {
    it('should return true with spam words', () => {
        //Given
        const spamString = 'Lorem, ipsum dolores';
        const spamWords = ['lorem', 'ipsum'];

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
       const expected = 'Lorem, x. dolores reeeboot';

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

    it('should return replaceSpam2', () => {
        //Given
       const data =  'Lorem ipsum dolor sit amet, ssss';

       const spamWords = [
           'lorem',
           'amet',
           'ssss'
       ];
       const wordToReplace = 'xxx';

       const expected = 'xxx ipsum dolor sit xxx, xxx';

        //When
        const actual = replaceSpam2(data, spamWords, wordToReplace);

        //Then
        expect(actual).toEqual(expected);
    });
})
