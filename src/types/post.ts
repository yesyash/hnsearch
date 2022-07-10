interface ISearchResult {
    created_at: string;
    title: string;
    author: string;
    created_at_i: number;
    objectID: string;
    _highlightResult: {
        title: {
            value: string;
        };
    };
}

export interface ISearchResults {
    data: ISearchResult[];
}
