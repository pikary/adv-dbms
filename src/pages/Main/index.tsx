import { FC, useRef, useEffect, useState } from "react";
import Categories from "../../components/MainPage/Categories";
import Carousel from "../../components/Carousel";
import ProductCard from "../../components/ProductCard";
import { motion, useScroll, useSpring } from 'framer-motion'
import SectionTitle from "../../components/SectionTitle";
import FlashSaleTimer from "../../components/CountDown";
import { products } from "./mock";
import './styles.scss'


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


const Main: FC = () => {

    const sliderRef = useRef<HTMLDivElement>(null);
    const { scrollX } = useScroll({
        container: sliderRef
    })
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

    return (
        <section>
            <div className="flex gap-6 pt-12">
                <Categories></Categories>
                <Carousel></Carousel>
            </div>
            <section id="todays" style={{ paddingTop: 120 }}>
                <SectionTitle title="Today's"></SectionTitle>
                <div className="flex items-center mt-5">
                    <div className="flex items-center gap-10 flex-1">
                        <h3 className="text-3xl font-semibold">Flash Sales</h3>
                        <FlashSaleTimer></FlashSaleTimer>
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
                    <motion.div
                        ref={sliderRef}
                        id="product-slider"
                        className="slider__container relative flex h-fit gap-8 py-10"
                        animate={{ x: currentX }}  // Animate the translateX value
                        transition={{ type: "tween", duration: 0.5 }}  // Animation duration and easing
                    >
                        {products.map((p) => (
                            <ProductCard key={p.product_id} data={p} />
                        ))}

                    </motion.div>

                </div>
            </section>
            <motion.div
                className="z-10 h-1 bg-primary"
                style={{ transformOrigin: 'left' }}  // Ensure it scales from the left side
                animate={{ scaleX: scrollProgress }}  // Animate based on scroll progress
                initial={{ scaleX: 0 }}  // Start with scaleX at 0
                transition={{ type: "tween", duration: 0.3 }}  // Smooth animation
            />

            <div style={{ height: 500 }}>

            </div>
        </section>
    )
}

export default Main