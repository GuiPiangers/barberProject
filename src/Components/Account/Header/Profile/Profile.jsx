import './Profile.css'

export default function Profile({img, name, email}){
    return(
        <div className="profile-container">
            <img className='profile__img' src={img} alt={name} />
            <div className="profile__info">
                <p className="profile__name">{name}</p>
                <p className="profile__email">{email}</p>
            </div>
        </div>
    )
}