export default function DropdownOption({children, value, customClass, onClickFunction}){
    

    return(
        <div 
            className={`dropdown__option ${customClass}`} 
            data-value={value}
            onClick={onClickFunction}
        >
            {children}
        </div>
    )
}