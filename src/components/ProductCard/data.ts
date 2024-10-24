import { Product } from "./types";
export const product: Product = {
    product_id: "12345",
    name: "Wireless Headphones",
    description: "Bluetooth over-ear headphones with noise-canceling feature.",
    category: "Electronics",
    price: 59.99,
    images: ["image_url_1", "image_url_2"],
    stock_quantity: 100,
    ratings: 4.5,
    reviews: [
        {
            user_id: "abc123",
            rating: 5,
            review: "Great sound quality!"
        }
    ],
    tags: ["Bluetooth", "Noise-Canceling", "Over-Ear"],
    discount: {
        active: true,
        percent_off: 10
    }
};


