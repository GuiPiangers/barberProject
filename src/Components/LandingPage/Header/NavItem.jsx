export default function NavItem({url, text}){
    function scrollToIdOnClick(event){
        event.preventDefault()
        const id = event.currentTarget.getAttribute('href')
        const section = document.querySelector(id)
        const sectionPosition = section.offsetTop 

        window.scroll({
            top: sectionPosition - 42,
            behavior: 'smooth', 
        })
    }

    return(
        <li className="nav__item">
            <a 
                className="nav__link" 
                href={`${url}`}
                onClick={scrollToIdOnClick}
            >
                {text}
            </a>
        </li>
    )
}