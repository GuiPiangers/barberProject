import './Photos.css'

import BoxContainer from '../../template/BoxContainer/BoxContainer'
import Topic from "../../usual/Topic/Topic"
import Title from "../../usual/Title/Title"

import photo1 from '../../../assets/Photos/photo1.jpg'
import photo2 from '../../../assets/Photos/photo2.jpg'
import photo3 from '../../../assets/Photos/photo3.jpg'
import photo4 from '../../../assets/Photos/photo4.jpg'
import photo5 from '../../../assets/Photos/photo5.jpg'
import photo6 from '../../../assets/Photos/photo6.jpg'
import photo7 from '../../../assets/Photos/photo7.jpg'

import PhotoSlider from './PhotosSlider';

export default function Photos(){

    return(
        <section className="photos" id='photos'>
            <BoxContainer maxWidth='100%' className='space-elements'>
                <Topic>Fotos</Topic>
                <Title>CONFIRA UM POUCO DO NOSSO TRABALHO</Title>
            </BoxContainer>
            <div className='slide-container'>
                <PhotoSlider>
                    <img className='photo__img' src={photo1} alt="photo1" />
                    <img className='photo__img' src={photo2} alt="photo1" />
                    <img className='photo__img' src={photo3} alt="photo1" />
                    <img className='photo__img' src={photo4} alt="photo1" />
                    <img className='photo__img' src={photo5} alt="photo1" />
                    <img className='photo__img' src={photo6} alt="photo1" />
                    <img className='photo__img' src={photo6} alt="photo1" />
                    <img className='photo__img' src={photo6} alt="photo1" />
                    <img className='photo__img' src={photo6} alt="photo1" />
                    <img className='photo__img' src={photo7} alt="photo1" />
                </PhotoSlider>
            </div>
        </section>
    )
}