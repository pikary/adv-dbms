
export interface User {
    _id: string;
    username: string;
    email: string;
    password: string; // Ideally, this would be a hashed password in a real-world scenario
    role: 'buyer' | 'seller'; // Can only be either 'buyer' or 'seller'
    region: string; // Region selected during registration (e.g., Astana, Almaty)
    wishlist?: string[]; // Optional field for buyers
    shopName?: string; // Only for sellers
    productListings?: string[]; // Only for sellers, references to product IDs
    salesHistory?: string[]; // Only for sellers, references to order IDs
}

export interface ResponseUserBody{
    user:User,
    access_token:string,
    refresh_token:string
}

export interface RegistrationRequestBody extends Omit<User, '_id' | 'wishlist' | 'productListings' | 'salesHistory'> {
    confirmPassword: string;
}
export interface LoginRequestBody {
    email: string;
    password: string;
}