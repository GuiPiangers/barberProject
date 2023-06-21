import { BsInstagram, BsFacebook, BsWhatsapp } from "react-icons/bs"

import './About.css'

import Title from "../../usual/Title/Title"
import Topic from "../../usual/Topic/Topic"

export default function About(){
    return(
        <section className="about" id="about">
            <div className="about-container">
                    <div className="about__texts">
                        <Topic>Sobre</Topic>
                        <Title>MAIS DO QUE UMA BARBEARIA</Title>
                        <p data-animation='left'>
                            Aqui, a experiência é transformada em arte. Nossos mestres barbeiros combinam habilidade e paixão para criar visuais masculinos impecáveis. Dos cortes clássicos aos estilos contemporâneos, cada cliente recebe um tratamento personalizado. Entre em nosso santuário masculino, relaxe em nossas poltronas de couro luxuosas e entregue-se a um momento de cuidado exclusivo. Descubra a diferença que uma barbearia autêntica pode fazer para a sua aparência e confiança. Agende agora e experimente uma verdadeira obra-prima para o seu estilo.
                        </p>
                    <div className="social-container">
                        <a href="/">
                            <BsInstagram
                                style={{'--delay-transition': '0.9s'}}    
                                className="social-icon"
                                size={24}
                                data-animation='left'
                            />
                        </a>

                        <a href="/">
                            <BsFacebook
                                style={{'--delay-transition': '1s'}}                                
                                className="social-icon"
                                size={24}
                                data-animation='left'
                            />
                        </a>

                        <a href="/">
                            <BsWhatsapp
                                style={{'--delay-transition': '1.1s'}}    
                                className="social-icon"
                                size={24}
                                data-animation='left'
                            />
                        </a>                    
                    </div>
                </div>
                <div className="about__img"></div>
            </div>
        </section>
    )
}