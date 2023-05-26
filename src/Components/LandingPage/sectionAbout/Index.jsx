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
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exerci tation veniam consequat sunt nostrud amet.
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