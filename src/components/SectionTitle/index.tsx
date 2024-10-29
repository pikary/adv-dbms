import { FC } from "react";
import './styles.scss'

interface STProps{
    title:string
}
const SectionTitle:FC<STProps> = ({title}) =>{
    return(
        <h3 className="section-title text-xl text-primary">
            {title}
        </h3>
    )    
}

export default SectionTitle