export interface Category{
    Id: number,
    Name: string,
    Subcategories: Subcategory[],
    Icon: string
}

export interface Publication{
    Id: number,
    Name: string,
    Price: string,
    Title: string,
    Description: string,
    State: boolean,
    Shipping: boolean,
    Favorite: boolean,
    Img: string,
    NewOrUsed: string,
    OfficialStore: boolean,
    Ubication: string,
    Category: number,
    Subcategory: number
}

export interface Subcategory{
    Id: number,
    Name: string,
    Filters?: Filter[],
}

export interface Filter{
    Id: number,
    Name: string,
    Type: number,
    Options?: any,
    Values?: any,
    Category?: number,
    Subcategory?: number,
    TableName: string,
    ColumnName: string
}

export class Message {
    constructor(
        public Content: string,
        public Speaker: Speaker,
    ) { }
}

export enum Speaker {
    USER = 1,
    ADMIN = 2
}