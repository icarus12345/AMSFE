export interface Product {
    id: number;
    code: string;
    name: string;
    thumbnail: string;
    images: Array<string>;
    price: number;
    discount: number;
    tax: number;
    in_stock: number;
    desc: string;
}

export interface CartItem {
    product_id: number;
    quantity: number;
    product: Product;
}
