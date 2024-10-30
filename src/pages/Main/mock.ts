import { Product } from "../../components/ProductCard/types";
import a from '../../assets/images/gamepade.png'

export const products: Product[] = [
    {
        product_id: "1001",
        name: "MacBook Pro 14-inch",
        description: "Apple MacBook Pro 2021 with M1 Pro chip, 16GB RAM, 512GB SSD",
        category: "Laptops",
        price: 1999.99,
        images: [a], // MacBook image
        stock_quantity: 50,
        ratings: 4.9,
        reviews: [{ user_id: "user001", rating: 5, review: "The performance is unmatched!" }],
        tags: ["Apple", "MacBook", "Laptop", "M1 Pro"],
        discount: { active: true, percent_off: 10 }
    },
    {
        product_id: "1002",
        name: "Dell XPS 13",
        description: "Dell XPS 13 with 11th Gen Intel Core i7, 16GB RAM, 512GB SSD",
        category: "Laptops",
        price: 1299.99,
        images: [a], // MacBook image

        stock_quantity: 35,
        ratings: 4.6,
        reviews: [{ user_id: "user002", rating: 4.5, review: "Compact and powerful!" }],
        tags: ["Dell", "XPS", "Laptop", "Intel"],
        discount: { active: false, percent_off: 0 }
    },
    {
        product_id: "1003",
        name: "iPhone 13 Pro",
        description: "Apple iPhone 13 Pro with A15 Bionic chip, 128GB Storage, 5G",
        category: "Smartphones",
        price: 999.99,
        images: [a], // MacBook image

        stock_quantity: 75,
        ratings: 4.8,
        reviews: [{ user_id: "user003", rating: 4.8, review: "The best iPhone yet!" }],
        tags: ["Apple", "iPhone", "Smartphone", "A15 Bionic"],
        discount: { active: false, percent_off: 0 }
    },
    {
        product_id: "1004",
        name: "Samsung Galaxy S21",
        description: "Samsung Galaxy S21 5G with Snapdragon 888, 128GB Storage",
        category: "Smartphones",
        price: 799.99,
        images: [a], // MacBook image

        stock_quantity: 100,
        ratings: 4.5,
        reviews: [{ user_id: "user004", rating: 4.5, review: "Great phone, awesome display!" }],
        tags: ["Samsung", "Galaxy", "Smartphone", "Snapdragon"],
        discount: { active: true, percent_off: 15 }
    },
    {
        product_id: "1005",
        name: "Sony A7 III",
        description: "Sony A7 III Full-Frame Mirrorless Camera with 24.2MP, 4K video",
        category: "Cameras",
        price: 1999.99,
        images: [a], // MacBook image

        stock_quantity: 20,
        ratings: 4.7,
        reviews: [{ user_id: "user005", rating: 4.7, review: "Amazing for photography!" }],
        tags: ["Sony", "Camera", "Mirrorless", "Full-Frame"],
        discount: { active: false, percent_off: 0 }
    },
    {
        product_id: "1006",
        name: "Canon EOS R5",
        description: "Canon EOS R5 Mirrorless Camera with 45MP, 8K video recording",
        category: "Cameras",
        price: 3899.99,
        images: [a], // MacBook image
        stock_quantity: 10,
        ratings: 4.9,
        reviews: [{ user_id: "user006", rating: 5, review: "Unmatched video quality!" }],
        tags: ["Canon", "Camera", "Mirrorless", "8K Video"],
        discount: { active: true, percent_off: 20 }
    },
    {
        product_id: "1007",
        name: "Bose QuietComfort 35 II",
        description: "Bose QuietComfort 35 II Wireless Bluetooth Headphones with Noise-Canceling",
        category: "Accessories",
        price: 299.99,
        images: [a], // MacBook image

        stock_quantity: 150,
        ratings: 4.7,
        reviews: [{ user_id: "user007", rating: 4.7, review: "Best noise-canceling headphones!" }],
        tags: ["Bose", "Headphones", "Bluetooth", "Noise-Canceling"],
        discount: { active: true, percent_off: 5 }
    },
    {
        product_id: "1008",
        name: "Logitech MX Master 3",
        description: "Logitech MX Master 3 Advanced Wireless Mouse with Ultrafast Scrolling",
        category: "Accessories",
        price: 99.99,
        images: [a], // MacBook image

        stock_quantity: 200,
        ratings: 4.8,
        reviews: [{ user_id: "user008", rating: 4.9, review: "Best mouse for productivity!" }],
        tags: ["Logitech", "Mouse", "Wireless", "Ergonomic"],
        discount: { active: false, percent_off: 0 }
    },
    {
        product_id: "1009",
        name: "Apple AirPods Pro",
        description: "Apple AirPods Pro with Active Noise Cancellation",
        category: "Accessories",
        price: 249.99,
        images: [a], // MacBook image

        stock_quantity: 120,
        ratings: 4.8,
        reviews: [{ user_id: "user009", rating: 4.8, review: "Superb sound quality!" }],
        tags: ["Apple", "AirPods", "Noise-Cancellation", "Bluetooth"],
        discount: { active: true, percent_off: 10 }
    },
    {
        product_id: "1010",
        name: "Samsung Galaxy Tab S7",
        description: "Samsung Galaxy Tab S7 with 11-inch Display, 128GB Storage, Wi-Fi",
        category: "Tablets",
        price: 649.99,
        images: [a], // MacBook image

        stock_quantity: 80,
        ratings: 4.6,
        reviews: [{ user_id: "user010", rating: 4.6, review: "Great tablet for productivity!" }],
        tags: ["Samsung", "Tablet", "Wi-Fi", "Android"],
        discount: { active: false, percent_off: 0 }
    },
    {
        product_id: "1011",
        name: "Microsoft Surface Pro 7",
        description: "Microsoft Surface Pro 7 with 12.3-inch Display, Intel Core i5, 8GB RAM, 128GB SSD",
        category: "Tablets",
        price: 899.99,
        images: [a], // MacBook image

        stock_quantity: 60,
        ratings: 4.5,
        reviews: [{ user_id: "user011", rating: 4.5, review: "Perfect for professionals on the go!" }],
        tags: ["Microsoft", "Surface", "Tablet", "Windows"],
        discount: { active: true, percent_off: 10 }
    },
    {
        product_id: "1012",
        name: "DJI Mavic Air 2",
        description: "DJI Mavic Air 2 4K Drone with 48MP Camera",
        category: "Drones",
        price: 799.99,
        images: [a], // MacBook image

        stock_quantity: 40,
        ratings: 4.7,
        reviews: [{ user_id: "user012", rating: 4.7, review: "Excellent camera and flight control!" }],
        tags: ["DJI", "Drone", "4K", "Camera"],
        discount: { active: true, percent_off: 15 }
    },
    {
        product_id: "1013",
        name: "GoPro HERO9 Black",
        description: "GoPro HERO9 Black 5K Action Camera with Front LCD and Touch Rear Screens",
        category: "Cameras",
        price: 399.99,
        images: [a], // MacBook image

        stock_quantity: 90,
        ratings: 4.8,
        reviews: [{ user_id: "user013", rating: 4.9, review: "The best action camera!" }],
        tags: ["GoPro", "Action Camera", "5K", "Waterproof"],
        discount: { active: false, percent_off: 0 }
    },
    {
        product_id: "1014",
        name: "Apple Watch Series 6",
        description: "Apple Watch Series 6 GPS, 44mm Silver Aluminum Case with White Sport Band",
        category: "Wearables",
        price: 429.99,
        images: [a], // MacBook image

        stock_quantity: 200,
        ratings: 4.9,
        reviews: [{ user_id: "user014", rating: 5, review: "Great fitness and health features!" }],
        tags: ["Apple", "Watch", "Wearable", "GPS"],
        discount: { active: true, percent_off: 5 }
    }
    // Repeat similar objects for more products...
];
