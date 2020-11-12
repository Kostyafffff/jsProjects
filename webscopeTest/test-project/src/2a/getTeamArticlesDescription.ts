import { IArticle, IAuthor, ITeam } from './types';

export const getTeamArticlesDescription = (teamId: number) : string => {
    const currentTeam = getCurrentTeam(teamId);


    return currentTeam.members.map(memberId => {
        const author = authors
            .filter(author => author.id === memberId)
            .map(author => ({
                ...author,
                articles: articles.filter(article => article.authors?.includes(author.id))
            }))[0];

        return convertToString(author.articles, author.name)
    }).join('\n');
}

const getCurrentTeam = (teamId: number): ITeam => teams.filter(it => it.id === teamId)[0];

const convertToString = (articles: IArticle[], authorName: string): string => {
    const articlesString = (articles: IArticle[]): string => {
        switch (articles.length) {
            case 0:
                return '0 articles'
            case 1:
                return `an article '${articles[0].text}'`
            case 2:
                return `articles '${articles[0].text}' and '${articles[1].text}'`
            default:
               return `articles '${articles[0].text}', '${articles[1].text}' ${andMoreFunction(articles.length)}`
        }
    };

    return `${authorName} wrote ${articlesString(articles)}.`;
};

const andMoreFunction = (articleLength: number): string => {
    if (articleLength > 2) {
        return `and ${articleLength - 2} more`;
    }

    return '';
};
const authors: Array<IAuthor> = [
    {id: 1, name: 'Oliver'},
    {id: 2, name: 'Jan'},
    {id: 3, name: 'Jakub'},
    {id: 4, name: 'Peter'},
    {id: 5, name: 'Tomas'},
    {id: 6, name: 'Drahoslav'},
    {id: 7, name: 'Honza'},
]

const teams: Array<ITeam> = [
    {id: 1, name: 'Webscope 1', members: [1,2,3,4]},
    {id: 2, name: 'Webscope 2', members: [5,6,7]},
]

const articles: Array<IArticle> = [
    {id: 1, text: 'MobX in practise', authors: [3]},
    {id: 33, text: 'RxJS and redux-observable', authors: [1, 2, 3, 5, 6, 7]},
    {id: 23, text: 'Firebase', authors: [7, 2, 3]},
    {id: 333, text: 'Really cool article'},
    {id: 1234, text: 'Ramda.js and Redux combined', authors: [2]},
    {id: 2, text: 'CSS in JS', authors: [3, 5]},
]


