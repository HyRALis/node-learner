const products: Product[] = [];

export class Product {
    title: string;

    constructor(title: string) {
        this.title = title;
    }

    public save() {
        products.push(this);
    }

    public static fetchAll() {
        return products.map((product) => product.title);
    }
}
