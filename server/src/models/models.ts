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
    Status: number,
    Shipping: boolean,
    Favorite: boolean,
    Currency: string,
    Description: string,
    Category: number,
    Subcategory: number,
    Stock: number,
    Warranty: string,
    Imgs: string[]
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
    Values?: any
}