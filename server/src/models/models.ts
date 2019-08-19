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
    State: boolean,
    Shipping: boolean,
    Favorite: boolean,
    Currency: string,
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