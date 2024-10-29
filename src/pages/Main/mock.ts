import a from '../../assets/images/clava.png';

const products = [
    {
        product_id: "12345",
        name: "Wireless Headphones",
        description: "Bluetooth over-ear headphones with noise-canceling feature.",
        category: "Electronics",
        price: 59.99,
        images: [a, "image_url_2"],
        stock_quantity: 100,
        ratings: 4.1,
        reviews: [
            {
                user_id: "abc123",
                rating: 4.9,
                review: "Great sound quality!"
            }
        ],
        tags: ["Bluetooth", "Noise-Canceling", "Over-Ear"],
        discount: {
            active: true,
            percent_off: 10
        }
    },
    {
        product_id: "12346",
        name: "Smartwatch Pro",
        description: "Feature-packed smartwatch with heart rate monitor and GPS.",
        category: "Wearables",
        price: 129.99,
        images: [a, "image_url_2"],
        stock_quantity: 50,
        ratings: 4.5,
        reviews: [
            {
                user_id: "xyz456",
                rating: 4.6,
                review: "Great for fitness tracking!"
            }
        ],
        tags: ["Fitness", "Smartwatch", "Heart Rate Monitor"],
        discount: {
            active: false,
            percent_off: 0
        }
    },
    {
        product_id: "12347",
        name: "4K LED TV",
        description: "Ultra HD television with stunning picture quality and smart features.",
        category: "Home Electronics",
        price: 399.99,
        images: [a, "image_url_2"],
        stock_quantity: 25,
        ratings: 4.7,
        reviews: [
            {
                user_id: "lmn789",
                rating: 4.8,
                review: "Amazing picture quality!"
            }
        ],
        tags: ["4K", "LED", "Smart TV"],
        discount: {
            active: true,
            percent_off: 15
        }
    },
    {
        product_id: "12348",
        name: "Gaming Mouse",
        description: "High precision gaming mouse with customizable buttons.",
        category: "Accessories",
        price: 49.99,
        images: [a, "image_url_2"],
        stock_quantity: 200,
        ratings: 4.3,
        reviews: [
            {
                user_id: "ghj012",
                rating: 4.4,
                review: "Perfect for gaming!"
            }
        ],
        tags: ["Gaming", "Mouse", "High Precision"],
        discount: {
            active: true,
            percent_off: 5
        }
    },
    {
        product_id: "12349",
        name: "Wireless Charger",
        description: "Fast wireless charger compatible with multiple devices.",
        category: "Accessories",
        price: 29.99,
        images: [a, "image_url_2"],
        stock_quantity: 300,
        ratings: 4.0,
        reviews: [
            {
                user_id: "klm345",
                rating: 4.2,
                review: "Charges my phone really fast!"
            }
        ],
        tags: ["Wireless", "Charger", "Fast Charging"],
        discount: {
            active: false,
            percent_off: 0
        }
    },
    {
        product_id: "12350",
        name: "Laptop Stand",
        description: "Ergonomic adjustable laptop stand for better posture.",
        category: "Office Supplies",
        price: 39.99,
        images: [a, "image_url_2"],
        stock_quantity: 150,
        ratings: 4.5,
        reviews: [
            {
                user_id: "nop678",
                rating: 4.6,
                review: "Helps me with my posture!"
            }
        ],
        tags: ["Ergonomic", "Adjustable", "Laptop Stand"],
        discount: {
            active: true,
            percent_off: 10
        }
    },
    {
        product_id: "12351",
        name: "Bluetooth Speaker",
        description: "Portable Bluetooth speaker with 360-degree sound.",
        category: "Audio",
        price: 89.99,
        images: [a, "image_url_2"],
        stock_quantity: 75,
        ratings: 4.4,
        reviews: [
            {
                user_id: "qrs910",
                rating: 4.5,
                review: "Great sound and portability!"
            }
        ],
        tags: ["Bluetooth", "Speaker", "Portable"],
        discount: {
            active: true,
            percent_off: 20
        }
    },
    {
        product_id: "12352",
        name: "Mechanical Keyboard",
        description: "RGB mechanical keyboard with customizable keys.",
        category: "Computer Accessories",
        price: 99.99,
        images: [a, "image_url_2"],
        stock_quantity: 120,
        ratings: 4.6,
        reviews: [
            {
                user_id: "tuv321",
                rating: 4.7,
                review: "Feels amazing to type on!"
            }
        ],
        tags: ["Mechanical", "Keyboard", "RGB"],
        discount: {
            active: false,
            percent_off: 0
        }
    },
    {
        product_id: "12353",
        name: "Smart Light Bulb",
        description: "Wi-Fi-enabled smart light bulb with voice control.",
        category: "Smart Home",
        price: 19.99,
        images: [a, "image_url_2"],
        stock_quantity: 400,
        ratings: 4.3,
        reviews: [
            {
                user_id: "wxy654",
                rating: 4.4,
                review: "Works perfectly with my smart home setup!"
            }
        ],
        tags: ["Smart", "Light Bulb", "Wi-Fi"],
        discount: {
            active: true,
            percent_off: 5
        }
    }
];

export { products };
