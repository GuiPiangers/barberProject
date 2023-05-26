import useOptionContext from '../../../data/hooks/useOptionContext'
import Button from '../../usual/Button/Button'
import createSteps from '../Steps/createSteps'

export default function HeaderScheduling(){

    const {activeStep, setActiveStep} = useOptionContext()
    const stepsText = ['Servico', 'Profissional', 'Data e Hora', 'Confirmar']
    const Steps = createSteps(stepsText)

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