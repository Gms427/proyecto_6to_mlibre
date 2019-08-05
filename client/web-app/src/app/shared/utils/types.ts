export interface UserInfo{
    Id: number,
    Name: string,
    Email: string,
    Phone: string,
    Neighboorhood: string,
    Departament: string,
    City: string,
    Street: string,
    RatingPromedy: number,
    Publications: number[]
}

/*export interface Publication{
    Id: number,
    Title: string,
    Description: string,
    CreationDate: Date,
    Status: boolean,
    RatingPromedy: number,
    Category: Category,
    Subcategory: Subcategory,
    Price: number,
    Currency: string
}*/
export interface Publication{
    Id: number,
    Name: string,
    Price: string,
    State: boolean,
    Shipping: boolean,
    Favorite: boolean,
    Img: string
}

export interface Category{
    Id: number,
    Name: string,
    Filters?: Filter[],
    Subcategories: Subcategory[]
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

export enum FilterTypes{
    NUMERIC_RANGE = 1, // 1 - 10
    BOOLEAN = 2, // Tiendas oficiales, si lo tengo seleccionado filtra y sino no
    OPTIONS_LIST = 3, // Nuevo o usado, solo se puede seleccionar una opción de la lista
    DATE_RANGE = 4,
    SELECTIONABLE_LIST = 5, // Ubicaciones, lista de valores predefinida, se selecciona al menos uno
}