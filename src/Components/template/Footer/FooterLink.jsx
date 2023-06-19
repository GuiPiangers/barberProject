export default function FooterLink({url, children}){
    return(
        <a href={url} className="footer__link">{children}</a>
    )
}