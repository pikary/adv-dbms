import { FC } from "react";
import Categories from "../../components/MainPage/Categories";
import Carousel from "../../components/Carousel";

const Main:FC =()=>{
    return(
        <section>
            <div className="flex gap-6 pt-12">
                <Categories></Categories>
                <Carousel></Carousel>
            </div>
            <div style={{height:500}}> </div>
        </section>
    )
}

export default Main