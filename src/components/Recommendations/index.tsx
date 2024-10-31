import { FC, useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import { products } from '../../pages/Main/mock';
import Button from '../Button';
import ProductCard from '../ProductCard';
import { useTypedSelector, useAppDispatch } from '../../store/hooks';
import { getRecommenedProducts } from '../../store/entities/Product/api'
import { unwrapResult } from '@reduxjs/toolkit';
import Spinner from '../Spinner';

const throttle = (func: (...args: any[]) => void, limit: number) => {
    let inThrottle: boolean;
    return (...args: any[]) => {
        if (!inThrottle) {
            func(...args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    };
};



const Recommendations: FC = () => {
    const dispatch = useAppDispatch()
    const { recommended, isLoading } = useTypedSelector((state) => state.products)

    const sliderRef = useRef<HTMLDivElement>(null);
    const [currentX, setCurrentX] = useState(0);  // Tracks the current translation value
    const [scrollProgress, setScrollProgress] = useState(0)

    const itemWidth = 320; // Example width of each item (including margin)
    const handleScroll = (direction: "left" | "right") => {
        const slider = sliderRef.current;

        if (slider) {
            const maxScroll = slider.scrollWidth - slider.clientWidth;
            if (direction === "left") {
                setCurrentX((prev) => {
                    const newX = Math.min(prev + itemWidth, 0);  // Move right
                    setScrollProgress(newX / -maxScroll);  // Update progress bar
                    return newX;
                });
            } else if (direction === "right") {
                setCurrentX((prev) => {
                    const newX = Math.max(prev - itemWidth, -maxScroll);  // Move left
                    setScrollProgress(newX / -maxScroll);  // Update progress bar
                    return newX;
                });
            }
        }
    };
    useEffect(() => {
        const slider = sliderRef.current;

        if (slider) {
            const handleWheelScroll = throttle((deltaY: number) => {
                setCurrentX((prev) => {
                    const maxScroll = slider.scrollWidth - slider.clientWidth;
                    const nextX = prev - deltaY * 2;  // Multiply by 2 for faster scrolling
                    const clampedX = Math.max(Math.min(nextX, 0), -maxScroll);  // Bound within scroll range
                    setScrollProgress(clampedX / -maxScroll);  // Update progress bar
                    return clampedX;
                });
            }, 100);

            const handleWheel = (e: WheelEvent) => {
                e.preventDefault();  // Prevent default page scroll
                handleWheelScroll(e.deltaY);  // Call the throttled scroll handler
            };

            // Add wheel event listener
            slider.addEventListener("wheel", handleWheel);

            // Cleanup on component unmount
            return () => {
                slider.removeEventListener("wheel", handleWheel);
            };
        }
    }, []);





    const fetchRecommendations = async () => {
        try {
            const response = await dispatch(getRecommenedProducts({ a: '' }));
            const result = unwrapResult(response);
            console.log(result.products);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        fetchRecommendations();
    }, []);
    return (
        <>

            <div className="flex items-center mt-5">
                <div className="flex items-center gap-10 flex-1">
                    <h3 className="text-3xl font-semibold">Take a look at this</h3>
                    {/* <FlashSaleTimer></FlashSaleTimer> */}
                    <button
                        className="rounded-full w-10 h-10 bg-slate-400 bg-opacity-50 cursor-pointer"
                        onClick={fetchRecommendations}
                    >
                        <i className="block fa-solid fa-arrows-rotate text-xl text-black hover:text-primary transition-colors duration-150"></i>
                    </button>
                </div>
                <div className="flex h-fit items-center gap-5">
                    <button
                        className="rounded-full w-10 h-10 bg-slate-400 bg-opacity-50 cursor-pointer"
                        onClick={() => handleScroll("left")}
                    >
                        <i className="block fa-solid fa-chevron-left text-xl text-black hover:text-primary transition-colors duration-150"></i>
                    </button>
                    <button
                        className="rounded-full w-10 h-10 bg-slate-400 bg-opacity-50 cursor-pointer"
                        onClick={() => handleScroll("right")}
                    >
                        <i className="block fa-solid fa-chevron-right text-xl text-black hover:text-primary transition-colors duration-150"></i>
                    </button>
                </div>
            </div>
            <div id="product-slider-cont" className="slider overflow-hidden">
                {isLoading ? (
                    <div className="flex justify-center items-center h-40">
                        <Spinner width={50} height={50}></Spinner>
                    </div>
                ) : (
                    <motion.div
                        ref={sliderRef}
                        className="slider__container relative flex h-fit gap-8 py-10"
                        animate={{ x: currentX }}
                        transition={{ type: "tween", duration: 0.5 }}
                    >
                        {recommended.map((p) => (
                            <ProductCard key={p.product_id} data={p} />
                        ))}
                    </motion.div>
                )}
            </div>
            <motion.div
                className="z-10 h-1 bg-primary"
                style={{ transformOrigin: 'left' }}  // Ensure it scales from the left side
                animate={{ scaleX: scrollProgress }}  // Animate based on scroll progress
                initial={{ scaleX: 0 }}  // Start with scaleX at 0
                transition={{ type: "tween", duration: 0.3 }}  // Smooth animation
            />
            <div className="flex w-full justify-center pt-10">
                <Button className="text-white max-w-fit px-10" text="View All Products" />
            </div>



        </>

    )
}

export default Recommendations