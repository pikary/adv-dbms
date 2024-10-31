import {FC} from 'react'
import './styles.css'


interface SpinnerProps{
    width:number,
    height:number
}
const Spinner:FC<SpinnerProps> = ({width,height}) =>{
    return (
        <div className="loader" style={{width,height}}></div>
    )
}

export default Spinner