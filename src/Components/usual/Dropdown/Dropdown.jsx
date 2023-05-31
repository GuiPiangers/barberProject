import  './Dropdown.css'

export default function Dropdown({children, visibility, setVisibility, customClass, style}){
    
    return(
        <>
        {visibility ? (
            <div
                className={`dropdown ${customClass}`}
                onClick={setVisibility}
                style={style}
            >
                {children}
            </div>
        ) : ''}
        </>
    )
}