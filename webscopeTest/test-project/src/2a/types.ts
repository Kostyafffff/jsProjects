export interface ITeam {
    id: number;
    name: string;
    members: Array<number>;
}

export interface IAuthor {
    id: number;
    name: string;
    articles?: IArticle[];
}

export interface IArticle {
    id: number;
    text: string;
    authors?: Array<number>;
}
