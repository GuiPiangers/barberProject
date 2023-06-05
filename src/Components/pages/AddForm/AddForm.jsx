import BoxContainer from '../../template/BoxContainer/BoxContainer'
import Form from './Form/Form'
import Input from './Form/Input'
import Button from '../../usual/Button/Button'
import Services from '../../../logic/core/Services'
import Professionals from '../../../logic/core/Professionals'
import { useState } from 'react'
import { useEffect } from 'react'

export default function AddForm(){

    const [serviceName, setServiceName] = useState('')
    const [servicePrice, setServicePrice] = useState(0)
    const [serviceDescription, setServiceDescription] = useState('')
    const [serviceImg, setServiceImg] = useState('')

    const [serviceOptions, setServiceOptions] = useState([])
    const [professionalServices, setProfessionalServices] = useState([])
    const [professionalName, setProfessionalName] = useState('')
    const [professionalImg, setProfessionalImg] = useState('')

    const service = new Services
    const professional = new Professionals

    function setService(){
        const price = servicePrice
        console.log(price)
        const entity = {
            name: serviceName,
            price: price,
            description: serviceDescription,
            img: serviceImg
        }
        service.set(entity)
    }
    function setProfessional(){
        const entity = {
            name: professionalName,
            img: professionalImg,
            services: professionalServices
        }
        professional.set(entity)
    }

    function changeProfessionalService(event){
        if(event.target.checked === false){
            const filterServices = professionalServices.filter(pService =>{
                return pService != event.target.value
            })
            setProfessionalServices(filterServices)
        }
        else{
            setProfessionalServices(prev => [...prev, event.target.value])
        }
    }

    useEffect(()=>{
        async function getServices(){
            setServiceOptions(await service.search())
        }
        getServices()
    }, [])


    return(
        <section>
            <BoxContainer>
                <div className="forms-container">
                    <Form>
                        <h2>Adicionar Profissional</h2>
                        <Input 
                            name='Nome:' 
                            type='text' 
                            placeholder='Nome do profissional'
                            value={professionalName}
                            onChange={event=> setProfessionalName(event.target.value)}

                        />
                        <Input 
                            name='Imagem:' 
                            type='text' 
                            placeholder='Imagem URL'
                            value={professionalImg}
                            onChange={event=> setProfessionalImg(event.target.value)}
                        />

                        {serviceOptions.map(option => 
                            <div className='checkbox-container' key={option.name}>
                                <input 
                                    type='checkbox' 
                                    value={option.name} 
                                    id={option.name}
                                    onChange={changeProfessionalService}
                                />
                                <label htmlFor={option.name}>{option.name}</label>
                            </div>
                        )}
                        <Button customClass='button--secondary' onClick={setProfessional}>
                            Adicionar
                        </Button>
                    </Form>
                    <Form>
                        <h2>Adicionar Serviço</h2>
                        <Input 
                            name='Nome:' 
                            type='text' 
                            placeholder='Nome do serviço'
                            value={serviceName}
                            onChange={event=>setServiceName(event.target.value)}
                        />
                        <Input 
                            name='Preço:' 
                            type='number' 
                            placeholder='Preço do serviço'
                            value={servicePrice}
                            onChange={event=>setServicePrice(+event.target.value)}
                        />
                        <Input 
                            name='Descrição:' 
                            type='text' 
                            placeholder='Descrição do serviço'
                            value={serviceDescription}
                            onChange={event=> setServiceDescription(event.target.value)}
                        />
                        <Input 
                            name='Imagem:' 
                            type='text' 
                            placeholder='Imagem URL'
                            value={serviceImg}
                            onChange={event=> setServiceImg(event.target.value)}
                        />
                        <Button customClass='button--secondary' onClick={setService}>Adicionar</Button>
                    </Form>
                </div>
            </BoxContainer>
        </section>
    )
}