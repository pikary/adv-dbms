interface Review {
    user_id: string;
    rating: number;
    review: string;
}

interface Discount {
    active: boolean;
    percent_off: number;
}

export interface Product {
    product_id: string;
    name: string;
    description: string;
    category: string;
    price: number;
    images: string[];
    stock_quantity: number;
    ratings: number;
    reviews: Review[];
    tags: string[];
    discount: Discount;
    quantity?:number
}

export interface GetProductsResponse{
    current_page:number,
    products:Product[],
    total_pages:6,
    total_products:6
}

export interface GetRecommnendedResponse{
    products:Product[]
}
