import { useEffect, useState } from 'react'
import useOptionContext from '../../../data/hooks/useOptionContext'
import Button from '../../usual/Button/Button'
import createSteps from '../Steps/createSteps'

export default function HeaderScheduling(){

    const [disableNextButton, setDisableNextButton] = useState(true)
    const [titleText, setTitleText] = useState('')
    const {activeStep, setActiveStep, stateScheduling} = useOptionContext()
    const stepsText = ['Servico', 'Profissional', 'Data e Hora', 'Confirmar']
    const Steps = createSteps(stepsText)

    function checkActiveStep(activeStep){
        let conditional = false
        if(activeStep === 1){
            conditional = stateScheduling.service === null
            setTitleText('Selecione um serviço')
        }
        if(activeStep === 2){
            conditional = stateScheduling.professional === null
            setTitleText('Selecione um profissional')
        }
        if(activeStep === 3){
            conditional = stateScheduling.date === null || stateScheduling.hour === null
            setTitleText('Selecione uma data e horário')
        }
        if(activeStep === 4){
            setTitleText('Confirme o agendamento')
        }
        setDisableNextButton(conditional)
    }

    useEffect(()=>{
        checkActiveStep(activeStep)
    }, [activeStep, stateScheduling])

    function nextStep(){
        if(activeStep < stepsText.length){
            setActiveStep(value => value+1)
        }
    }
    function previousStep(){
        if(activeStep >= 1){
            setActiveStep(value => value-1)
        }
    }

    function genereteSecudaryButton(){
        if(activeStep > 1){
            return(
                <Button 
                customClass='button--secondary'
                onClick={previousStep}
            >
                Voltar
            </Button>
            )
        }
    }


    function generetePrimaryButton(){
        if(activeStep < stepsText.length){
            return(
                <Button 
                customClass='button--primary'
                onClick={nextStep}
                disabled={disableNextButton}
            >
                Avançar
            </Button>
            )
        }
    }

    return(
        <div className='scheduling__header'>
            <div className='flex-row'>
                <h2 className='scheduling__title'>{titleText}</h2>
                <div className='button-container'>
                    {genereteSecudaryButton()}
                    {generetePrimaryButton()}
                </div>
            </div>
            {Steps()}
        </div>
    )
}