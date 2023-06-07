import { BsXCircle } from 'react-icons/bs'
import './NotFound.css'

export default function NotFound({children}){
    return(
        <div className='notfound'>
            <BsXCircle size={56} opacity={0.7}/>
            {children}
        </div>
    )
}