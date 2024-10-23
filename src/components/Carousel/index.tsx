import { FC } from "react";
import bannerImg from '../../assets/images/banner_img.png'
import apple from '../../assets/images/apple.png'
import './style.css'

const Carousel: FC = () => {
    return (
        <div className="carousel flex-1 ml-12">
            <div className="w-full bg-black text-white relative py-16 px-20">
                <div className="flex gap-3 items-center">
                    <img src={apple} width={50} height={55}></img>
                    <h3 className="text-lg">iPhone 14 Series</h3>
                </div>
                <h4 className="text-5xl font-bold leading-tight">Up to 10% <br></br> off Voucher</h4>
                <a href="" className="text-lg underline">Shop now <i className={`inline fa-solid fa-chevron-right text-xl text-white'}`}></i></a>
                <img width={380} height={300} src={bannerImg} className="absolute top-1/2 right-0 trnasform -translate-y-1/3"></img>
            </div>
        </div>
    )
}

export default Carousel