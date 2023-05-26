
export default function HeroInfo({title, text}){
    return(
        <div className='hero__info'>
            <h2 className="hero__info-title">{title}</h2>
            <p className="hero__info-text">{text}</p>
        </div>
    )
}