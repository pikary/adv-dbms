    import {FC} from 'react'
    import LanguagePicker from "../LanguagePicker";
    import './topbar.css'

    const Topbar:FC = () =>{
        return(
            <header className={'topbar px-5 h-14 bg-backround '}>
                <div className={'topbar__wrapper relative flex items-center justify-center h-full text-base'}>
                    <p className={'text-white text-center self-center'}>
                        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                        <a href={'*'} className={'inline underline cursor-pointer ml-2'}>Shop Now</a>
                    </p>
                    <div className={'absolute top-1/2 right-0  transform -translate-y-1/2'}>
                        <LanguagePicker/>
                    </div>
                </div>
            </header>
        )
    }

    export default Topbar