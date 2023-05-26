import { useEffect, useState } from 'react'
import useOptionContext from '../../../data/hooks/useOptionContext'
import Button from '../../usual/Button/Button'
import createSteps from '../Steps/createSteps'

export default function HeaderScheduling(){

    const [disableNextButton, setDisableNextButton] = useState(true)
    const {activeStep, setActiveStep, stateScheduling} = useOptionContext()
    const stepsText = ['Servico', 'Profissional', 'Data e Hora', 'Confirmar']
    const Steps = createSteps(stepsText)

    function returnDisableButton(activeStep){
        if(activeStep === 1){
            let conditional = stateScheduling.service?.length === 0
            setDisableNextButton(conditional)
        }
        if(activeStep === 2){
            let conditional = stateScheduling.professional?.length === undefined
            setDisableNextButton(conditional)
        }
        if(activeStep === 3){
            let conditional = stateScheduling.date?.length === undefined
            setDisableNextButton(conditional)
        }
    }

    useEffect(()=>{
        returnDisableButton(activeStep)
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
                <h2 className='scheduling__title'>Selecione seu serviço</h2>
                <div className='button-container'>
                    {genereteSecudaryButton()}
                    {generetePrimaryButton()}
                </div>
            </div>
            {Steps()}
        </div>
    )
}