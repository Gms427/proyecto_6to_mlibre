import { Subcategory } from "./Subcategory";

export interface Category{
    Id: number,
    Name: string,
    Subcategories: Subcategory[]
}