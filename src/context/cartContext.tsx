import { createContext, useState, useEffect, FC, ReactNode } from "react";
import { Product } from "../components/ProductCard/types";
import CartModal from "../components/CartModal";

// Define the Cart Context props
interface CartContextProps {
    products: Product[];
    addProduct: (product: Product) => void;
    removeProduct: (productId: string) => void;
    clearCart: () => void;
}

const CartContext = createContext<CartContextProps>(null);

interface CartContextProviderProps {
    children: ReactNode;
}

// CartProvider Component
const CartProvider: FC<CartContextProviderProps> = ({ children }) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [addedProduct, setAddedProduct] = useState<Product | null>(null);

    const handleCLoseCartModal = () => {
        setAddedProduct(null);
    };

    // Add product to the cart
    const addProduct = (product: Product) => {
        const existingProduct = products.find((p) => p.product_id === product.product_id);

        if (existingProduct) {
            setProducts((prev) => {
                return prev.map((p) =>
                    p.product_id === existingProduct.product_id
                        ? { ...p, quantity: (p.quantity || 1) + 1 }
                        : p
                );
            });
            setAddedProduct(product); // Show modal even when product already exists
        } else {
            setProducts((prev) => [...prev, { ...product, quantity: 1 }]);
            setAddedProduct(product);
        }
    };

    const removeProduct = (productId: string) => {
        setProducts((prevProducts) => prevProducts.filter((p) => p.product_id !== productId));
    };

    const clearCart = () => {
        setProducts([]);
        localStorage.removeItem("cart");
    };

    useEffect(() => {
        const savedCart = localStorage.getItem("cart");
        if (savedCart) {
            setProducts(JSON.parse(savedCart)); // Load saved cart from localStorage
        }
    }, []);

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(products));
    }, [products]);

    return (
        <CartContext.Provider value={{ products, addProduct, removeProduct, clearCart }}>
            {addedProduct && <CartModal  product={addedProduct} onClose={handleCLoseCartModal} />}
            {children}
        </CartContext.Provider>
    );
};

export { CartContext, CartProvider };
