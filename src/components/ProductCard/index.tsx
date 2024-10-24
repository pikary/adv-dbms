import { FC } from "react";
import { Product } from "./types";
import './styles.scss'

interface ProductCardProps {
    data: Product
}



const ProductCard: FC<ProductCardProps> = (props) => {
    const { data } = props
    // Calculate the price with discount if active
    const discountedPrice = data.discount.active
        ? (data.price * (1 - data.discount.percent_off / 100)).toFixed(2)
        : data.price.toFixed(2);





    // Calculate stars based on ratings
    const renderStars = (rating: number) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= Math.floor(rating)) {
                // Full star
                stars.push(<span key={i} className="star star__full">&#9733;</span>);
            } else {
                // not full star
                const delta = (i - rating) * 100;
                const filliness = (100 - (delta))
                stars.push(<span key={i} className="star star__other" style={{ '--fill-percentage': `${filliness}%` } as React.CSSProperties}>&#9733;</span>);
            }
        }
        return stars;
    };


    return (
        <div className="card relative">
            <div className="w-full relative" style={{ height: 250, width: 270, backgroundColor: '#F5F5F5' }}>
                <img className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2" src={data.images[0]} width={190} height={270} alt="product_img" />
            </div>
            <div className="pt-4">
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