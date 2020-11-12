import { getTeamArticlesDescription } from './getTeamArticlesDescription';

describe('getTeamArticlesDescription tests', () => {
   it('should return correct data for first team', () => {
       //Given
       const expected = `Oliver wrote an article 'RxJS and redux-observable'.\n` +
           `Jan wrote articles 'RxJS and redux-observable', 'Firebase' and 1 more.\n` +
           `Jakub wrote articles 'MobX in practise', 'RxJS and redux-observable' and 2 more.\n` +
           `Peter wrote 0 articles.`;

       //When
       const actual = getTeamArticlesDescription(1);

       //Then
       expect(actual).toEqual(expected);
    })

    it('should return correct data for second team', () => {
        //Given
        const expected = `Tomas wrote articles 'RxJS and redux-observable' and 'CSS in JS'.\n` +
            `Drahoslav wrote an article 'RxJS and redux-observable'.\n` +
            `Honza wrote articles 'RxJS and redux-observable' and 'Firebase'.`

        //When
        const actual = getTeamArticlesDescription(2);

        //Then
        expect(actual).toEqual(expected);
    })
})
