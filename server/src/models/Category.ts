import { Subcategory } from "./Subcategory";

export interface Category{
    IdCategory: number,
    CategoryName: string,
    Subcategories: Subcategory[]
}