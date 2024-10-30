import { FC, useContext, useEffect, useRef, useState } from "react";
import { Product } from "./types";
import './styles.scss'
import Button from "../Button";
import { AnimatePresence, motion } from "framer-motion";
import { renderStars } from './helpers'
import { CartContext } from "../../context/cartContext";

interface ProductCardProps {
    data: Product,
    className?: string
}



const ProductCard: FC<ProductCardProps> = (props) => {
    //here using context get addProcut from it an other function
    const {
        products,
        addProduct,
        removeProduct,
        clearCart
    } = useContext(CartContext)


    const [cardHovered, setCardHovered] = useState<boolean>(false)
    const cardRef = useRef<HTMLDivElement>(null)
    const { data } = props
    // Calculate the price with discount if active
    const discountedPrice = data.discount.active
        ? (data.price * (1 - data.discount.percent_off / 100)).toFixed(2)
        : data.price.toFixed(2);




    useEffect(() => {
        const handleMouseEnter = (e: MouseEvent) => {
            setCardHovered(true)
        }
        const handleMouseLeave = (e: MouseEvent) => {
            setCardHovered(false)
        }
        cardRef.current?.addEventListener('mouseenter', handleMouseEnter)
        cardRef.current?.addEventListener('mouseleave', handleMouseLeave)
        return () => {
            cardRef.current?.removeEventListener('mouseenter', handleMouseEnter)
            cardRef.current?.removeEventListener('mouseleave', handleMouseLeave)
        }
    }, [])


    const handleAddToCart = (product:Product) => {
        console.log('ADDED');

        addProduct(product)
    }


    return (
        <div ref={cardRef} className={`card relative ${props.className} cursor-pointer box-content border-0 hover:border-2 hover:border-primary transition duration-300 ease-in-out`}>
            <div className="w-full relative" style={{ height: 250, width: 270, backgroundColor: '#F5F5F5',}}>
                <img className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2" src={data.images[0]} width={190} height={270} alt="product_img" />
                {cardHovered &&
                    <AnimatePresence>
                        <motion.div
                            className="absolute bottom-0 w-full"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.3 }}
                            key={`${props.data.product_id}-btn`}
                        >
                            <Button
                                onClick={(e)=>{
                                    e.stopPropagation()                                    
                                    handleAddToCart(props.data)
                                }}
                                className="text-white bg-black rounded-none text-xl font-semibold"
                                text="Add to Cart"
                            />
                        </motion.div>
                    </AnimatePresence>
                }
            </div>
            <div className="pt-4 pl-4 pb-4">
                <h4 className="text-lg font-semibold leading-7">{data.name}</h4>
                <p className="text-base leading-7">
                    {data.discount.active && (
                        <span className="line-through mr-2">${data.price.toFixed(2)}</span>
                    )}
                    <span className="text-primary">${discountedPrice}</span>
                </p>
                <div className="text-base flex items-center leading-7">
                    <div className="mt-1">
                        {renderStars(data.ratings)}
                    </div>
                    <p className="inline ml-1 mt-1 text-gray-500 text-base">(88)</p>
                </div>
            </div>


            {
                data.discount.active &&
                <div className="absolute top-5 left-3 bg-primary w-fit text-white text-base rounded-lg py-1 px-3">
                    {data.discount.percent_off}%
                </div>
            }


            {
                <div className="absolute top-5 right-3">
                    <button className="flex items-center justify-center bg-white rounded-full w-5 h-5 mb-5">
                        <i className="far fa-heart text-base text-black hover:text-primary transition-colors duration-100 ease-out"></i>
                    </button>
                    <button className="flex items-center justify-center bg-white rounded-full w-5 h-5">
                        <i className="far fa-eye text-base text-black hover:text-primary transition-colors duration-100 ease-out"></i>
                    </button>
                </div>
            }
        </div>
    );
}

export default ProductCard