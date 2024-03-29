import { Production } from './production';
import { Product, ProductLine } from './product';

export class Shop {

    private availableProducts: Map<ProductLine, number>;

    constructor() {
        this.availableProducts = new Map<ProductLine, number>([
            [ProductLine.Postcard, 2],
            [ProductLine.Book, 0],
            [ProductLine.BusinessCard, 5]
        ]);
    }

    async orderProduct(productType: ProductLine) {
        console.log(`Your order for a ${productType} has been received. Checking store availability...`);
        if (this.checkAvailability(productType)) {
            console.log(`${productType} is available in the shop.`);
            await new Promise(resolve => setTimeout(resolve, 1000));
            console.log(`You can pick up your order!`);
            this.removeFromStock(productType);
        }
        else {
            console.log(`${productType} is out of stock!`);
            await this.orderFromProduction(productType);
            this.addToStock(productType);
            await new Promise(resolve => setTimeout(resolve, 3000));
            console.log(`${productType} is available in the store. You can now pick up your order!`);
            this.removeFromStock(productType);
        }
    }

    private checkAvailability(productType: ProductLine): boolean {
        return this.availableProducts.get(productType) > 0;
    }

    private orderFromProduction(productType: ProductLine): Promise<Product.TypographyProduct> {
        console.log(`Ordering ${productType} from production...`);
        return new Production(this).processOrder(productType);
    }

    private async addToStock(productType: ProductLine) {
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log(`Adding ${productType} to the shop's stock...`);
        this.availableProducts.set(productType, this.availableProducts.get(productType) + 1);
    }

    private removeFromStock(productType: ProductLine) {
        this.availableProducts.set(productType, this.availableProducts.get(productType) - 1);
    }
}
