import { FC } from "react";
import bannerImg from '../../assets/images/banner_img.png'
import apple from '../../assets/images/apple.png'
import { banners } from "./data";
import './style.css'

const Carousel: FC = () => {
    return (
        <div className="carousel flex-1 ml-12 relative">
            {/* {banners.map(banner => (
                <div key={banner.id} className="w-full bg-black text-white relative py-16 px-20">
                    <div className="flex gap-3 items-center">
                        <img src={apple} width={50} height={55} alt="Apple logo"></img>
                        <h3 className="text-lg">{banner.title}</h3>
                    </div>
                    <h4 className="text-5xl font-bold leading-tight">{banner.subtitle}</h4>
                    <a href="" className="text-lg underline">
                        Shop now <i className={`inline fa-solid fa-chevron-right text-xl text-white`}></i>
                    </a>
                    <img width={380} height={300} src={banner.imgSrc} alt={banner.altText} className="absolute top-1/2 right-0 transform -translate-y-1/3"></img>
                </div>
            ))} */}
            <div className="w-full h-full bg-black text-white relative py-16 px-20">
                <div className="flex gap-3 items-center">
                    <img src={apple} width={50} height={55} alt="Apple logo"></img>
                    <h3 className="text-lg">{banners[0].title}</h3>
                </div>
                <h4 className="text-5xl font-bold leading-tight"
                    dangerouslySetInnerHTML={{ __html: banners[0].subtitle }}
                ></h4>
                <a href="" className="text-lg underline mt-5 block">
                    Shop now <i className={`inline fa-solid fa-chevron-right text-xl text-white`}></i>
                </a>
                <img width={380} height={300} src={banners[0].imgSrc} alt={banners[0].altText} className="absolute top-1/2 right-0 transform -translate-y-1/3"></img>
            </div>
            <div className="flex gap-2 w-fit h-fit absolute bottom-5 left-1/2 transfrom -translate-x-1/2">
                {Array.from({ length: 5 }).map(() => (
                    <div role="button" className="w-4 h-4 rounded-full bg-inactive cursor-pointer"></div>
                ))}
            </div>
        </div>
    )
}

export default Carousel