export type Product = {
    name: string,
    style: number,
    code_color: string,
    color_slug: string,
    color: string,
    on_sale: boolean,
    regular_price: string,
    actual_price: string,
    discount_percentage: string,
    installments: string,
    image: string,
    sizes: [
        {
            available: boolean,
            size: string,
            sku: string
        }
    ]
}