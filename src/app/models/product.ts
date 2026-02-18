export class Product {
    id: number = 0;
    name: string = '';
    description: string = '';
    price: number = 0;

    constructor(id?: number, name?: string, description?: string, price?: number) {
        if (id) this.id = id;
        if (name) this.name = name;
        if (description) this.description = description;
        if (price) this.price = price;
    }
}