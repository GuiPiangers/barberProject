import  './Dropdown.css'

export default function Dropdown({children, visibility, setVisibility}){
    
    return(
        <>
        {visibility ? (
            <div
                className="dropdown"
                onClick={setVisibility}
            >
                {children}
            </div>
        ) : ''}
        </>
    )
}