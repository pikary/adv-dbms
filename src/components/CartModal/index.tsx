import { FC, useEffect } from "react";
import { Product } from "../ProductCard/types";
import { products } from "../../pages/Main/mock";
import ProductCard from "../ProductCard";
import Button from "../Button";
import { useNavigate } from "react-router-dom";


interface ModalProps {
    product: Product;
    onClose: () => void;
}



const CartModal: FC<ModalProps> = ({ product, onClose }) => {
    const navigate = useNavigate()
    useEffect(() => {
        document.body.style.overflow = 'hidden';
    
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);
    
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ">
            <div className=" bg-white rounded-lg shadow-lg p-6 w-1/2 overflow-hidden">
                <div className="relative">
                    <h3 className="text-3xl font-semibold mb-4">You added 1 item to the cart</h3>
                    <button onClick={onClose} className="absolute top-1/2 right-0 transform -translate-y-1/2">
                        <i className="fas fa-times text-2xl text-gray-500 hover:text-primary transition-colors duration-300 ease-in-out"></i>
                    </button>
                </div>

                {/*                 
                <p className="text-lg mb-2">{product.name}</p>
                <img src={product.images[0]} alt={product.name} className="w-24 h-24 object-cover mb-4 mx-auto" /> */}
                <div className="flex gap-6 justify-between items-center mt-6">
                    <Button
                        className="w-96 bg-gray-200 text-gray-700 py-2 px-4 rounded hover:bg-gray-300 transition duration-200"
                        onClick={() => { onClose() }}
                        text="Continue Shopping"
                    />
                    <Button
                        className=" w-96 bg-primary text-white py-2 px-4 rounded hover:bg-opacity-80 transition duration-200"
                        onClick={() => {navigate('/billing') }}
                        text="Go to Cart"
                    />
                </div>
                <div className="mt-10">
                    <h4 className="text-3xl font-semibold text-primary">Ноутбуки и компьютеры</h4>
                    <hr />
                    <div className="flex gap-4 pt-5 pb-5 overflow-x-auto">
                        {products.slice(0, 4).map((p) => (
                            <ProductCard data={p} key={p.product_id}></ProductCard>
                        ))}
                    </div>
                </div>

            </div>
        </div >
    );
};

export default CartModal;
