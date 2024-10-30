import { FC, useRef, useEffect, useState } from "react";
import Categories from "../../components/MainPage/Categories";
import Carousel from "../../components/Carousel";
import ProductCard from "../../components/ProductCard";
import SectionTitle from "../../components/SectionTitle";
import { products } from "./mock";
import './styles.scss'
import Button from "../../components/Button";
import Recommendations from "../../components/Recommendations";
import ProductList from "../../components/ProductList";




const Main: FC = () => {

    const sliderRef = useRef<HTMLDivElement>(null);
  

   

    return (
        <>
            <section>
                <div className="flex gap-6 pt-12">
                    <Categories></Categories>
                    <Carousel></Carousel>
                </div>
            </section>
            <section id="todays" style={{ paddingTop: 50 }}>
                <SectionTitle title="Today's"></SectionTitle>
                <Recommendations></Recommendations>
            </section>

            <section id="electonics-category" style={{paddingTop:50}}>
                <SectionTitle title="Top category"></SectionTitle>
                <ProductList products={products} pageNumber={1} itemsPerPage={8}></ProductList>
            </section>
            <div style={{ height: 60 }}>

            </div>
        </>


    )
}

export default Main