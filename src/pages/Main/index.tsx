import { FC } from "react";
import Categories from "../../components/MainPage/Categories";
import Carousel from "../../components/Carousel";
import ProductCard from "../../components/ProductCard";

import a from '../../assets/images/clava.png'

const product = {
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
};


const Main: FC = () => {
    return (
        <section>
            <div className="flex gap-6 pt-12">
                <Categories></Categories>
                <Carousel></Carousel>
            </div>
            <div style={{ height: 500 }}>

                <ProductCard data={product}></ProductCard>
            </div>
        </section>
    )
}

export default Main