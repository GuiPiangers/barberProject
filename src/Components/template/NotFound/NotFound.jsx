import { BsXCircle } from 'react-icons/bs'
import './NotFound.css'

export default function NotFound({children, customClass}){
    return(
        <div className={`notfound ${customClass}`}>
            <BsXCircle size={48} opacity={0.7}/>
            {children}
        </div>
    )
}