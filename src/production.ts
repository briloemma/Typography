import { Product, ProductLine } from './product';
import { ProductFactory } from './productFactory';
import { Shop } from './shop';
export class Production {
    constructor(private shop: Shop) { }
    async processOrder(productType: ProductLine): Promise<Product.TypographyProduct> {
        console.log(`${productType} is being produced...`);
        const product = ProductFactory.createProduct(productType, this.shop);
        await new Promise(resolve => setTimeout(resolve, this.getProductionTime(productType)));
        return product;
    }

    private getProductionTime(productType: ProductLine): number {
        switch (productType) {
            case ProductLine.Postcard:
                return 2000;
            case ProductLine.Book:
                return 5000;
            case ProductLine.BusinessCard:
                return 1000;
            default:
                throw new Error('Unknown product type');
        }
    }
}
