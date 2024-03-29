import { Shop } from './shop';

export namespace Product {
    export abstract class TypographyProduct {
        constructor(private shop: Shop) { }
    }
    export class Postcard extends Product.TypographyProduct { }
    export class Book extends Product.TypographyProduct { }
    export class BusinessCard extends Product.TypographyProduct { }
}

export enum ProductLine {
    Postcard = 'Postcard',
    Book = 'Book',
    BusinessCard = 'BusinessСard'
}