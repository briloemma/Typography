import { Shop } from './shop';
import { Product, ProductLine } from './product';

export class ProductFactory {
    static createProduct(productType: ProductLine, shop: Shop): Product.TypographyProduct {
        switch (productType) {
            case ProductLine.Postcard:
                return new Product.Postcard(shop);
            case ProductLine.Book:
                return new Product.Book(shop);
            case ProductLine.BusinessCard:
                return new Product.BusinessCard(shop);
            default:
                throw new Error('Unknown product type.');
        }
    }
}