import './Loader.css'

export default function Loader({color = '#FAB142'}){
    return <div className="custom-loader" style={{'--color-loader': color}}></div>
}