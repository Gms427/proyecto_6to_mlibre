/*export interface UserInfo{
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
}*/

export interface UserInfo {
    Id: number,
    FullName: string,
    Email: string,
    DateOfBirth: Date,
    Phone: string,
    Status: number,
    Departament: string,
    City: string,
    Street: string,
    Neighborhood: string
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
    Img: string,
    NewOrUsed: string,
    OfficialStore: boolean,
    Ubication: string,
    Category: number,
    Subcategory: number
}

export interface Category{
    Id: number,
    Name: string,
    Filters?: Filter[],
    Subcategories: Subcategory[],
    Icon: string
}

export interface Subcategory{
    Id: number,
    Name: string,
    Filters?: Filter[],
}

export interface Filter{
    Id: number,
    Name: string,
    Type: string,
    Options?: any,
    Values?: any,
    Category?: number,
    Subcategory?: number,
    TableName: string,
    ColumnName: string
}

export enum FilterTypes{
    NUMERIC_RANGE = 1, // 1 - 10
    BOOLEAN = 2, // Tiendas oficiales, si lo tengo seleccionado filtra y sino no
    OPTIONS_LIST = 3, // Nuevo o usado, solo se puede seleccionar una opción de la lista
    DATE_RANGE = 4,
    SELECTIONABLE_LIST = 5, // Ubicaciones, lista de valores predefinida, se selecciona al menos uno
}

export interface Currency{
    Id: number,
    Name: string,
    Symbol?: string
}

export interface PublicationBaseInfo{
    Title: string,
    Description: string,
    Price: string,
    Currency: string,
    Stock: number,
    Category: number,
    Subcategory: number,
    NewOrUsed: number
}

export enum Currencies {
    USD = 1,
    UYU = 2,
    EUR = 3
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