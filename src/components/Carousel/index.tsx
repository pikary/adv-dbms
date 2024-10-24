import { FC, useMemo, useState } from "react";
import { AnimatePresence, motion } from 'framer-motion'
import bannerImg from '../../assets/images/banner_img.png'
import apple from '../../assets/images/apple.png'
import { banners } from "./data";
import './style.css'



const container = {
    initial: { x: "100%", opacity: 0 },
    animate: {
        x: 0, opacity: 1, scale: 1,
        transition: {
            duration: 0.5, // Speed of animation
            ease: [0.6, 0.05, 0.1, 0.9], // Valid easing curve
        }
    },
    exit: {
        x: "-100%"
    }
};

const Carousel: FC = () => {

    const [activeIndex, setActiveIndex] = useState<number>(0)
    const handleButtonClick = (index: number) => {
        setActiveIndex(-1)
        setActiveIndex(index);
    };

    return (
        <div className="carousel flex-1 ml-12 relative overflow-hidden">
            <motion.div
                className="w-full h-full relative flex"
                animate={{ x: `-${activeIndex * 100}%` }} // Move wrapper based on index
                transition={{ duration: 0.7, ease: "easeInOut" }} // Smooth slide transition
            >
                {banners.map((banner, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 w-full h-full bg-black text-white relative py-16 px-20"
                        style={{ width: "100%" }} // Ensures each banner takes full width
                    >
                        <div className="flex gap-3 items-center">
                            <img src={apple} width={50} height={55} alt="Apple logo" />
                            <h3 className="text-lg">{banner.title}</h3>
                        </div>
                        <h4 className="text-5xl font-bold leading-tight"
                            dangerouslySetInnerHTML={{ __html: banner.subtitle }}
                        ></h4>
                        <a href="#" className="text-lg underline mt-5 block">
                            Shop now <i className="inline fa-solid fa-chevron-right text-xl text-white"></i>
                        </a>
                        <img width={380} height={300} src={banner.imgSrc} alt={banner.altText} className="absolute top-1/2 right-0 transform -translate-y-1/3" />
                    </div>
                ))}
            </motion.div>
            <div className="flex gap-2 w-fit h-fit absolute bottom-5 left-1/2 transform -translate-x-1/2">
                {Array.from({ length: banners.length }).map((_, ind) => (
                    <div
                        key={ind}
                        role="button"
                        onClick={() => handleButtonClick(ind)}
                        className={`w-4 h-4 rounded-full cursor-pointer ${ind === activeIndex ? 'bg-primary border-white-500 border-2' : 'bg-inactive'}`} // Highlight the active button
                    ></div>
                ))}
            </div>
        </div>
    )
}

export default Carousel