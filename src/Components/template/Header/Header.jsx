import './Header.css'

export default function Header({customClass, children}){
    return(
        <header className={`header ${customClass}`}>
            {children}
        </header>
    )
}