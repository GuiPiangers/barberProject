import { createContext, useState, useEffect, useReducer } from "react"
import Users from "../../logic/core/Users"

const optionContext = createContext(null)
export default optionContext

export function ContextProvider({children}){

    const [activeStep, setActiveStep] = useState(1)
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)
    
    const users = new Users
    async function loginGoogle(){
        const loggedUser = await users.loginGoogle()
        setUser(loggedUser)
    }
    async function loginEmailPassowrd(email, password){
        const loggedUser = await users.loginEmailPassword(email, password)
        setUser(loggedUser)
    }
    async function singUpEmailPassowrd(email, password){
        const loggedUser = await users.createUserEmailPassword(email, password)
        setUser(loggedUser)
    }
    async function logout(){
        await users.logout()
        setUser(null)
    }

    useEffect(()=>{
        const cancel = users.observeAuthentication((user)=>{
            setUser(user)
            setLoading(false)
        })
        return () => cancel()
    },[])

    async function updateUser(newUser) {
        if (usuario && usuario.email !== newUser.email) return logout()
        if (usuario && newUser && usuario.email === newUser.email) {
            await users.set(newUser)
            setUsuario(newUser)
        }
    }

    function setBackStepsAnimation(stepNumber){
        const steps = document.querySelectorAll('.step-container')
        const stepsToAnimate = [...steps].filter(step =>{
            const number = step.dataset.stepnumber
            if(number >= stepNumber && number <= activeStep){
                return true
            }
        })
        const lastStep = stepsToAnimate.length-1

        for(let i = lastStep; i>=1 ; i--){
            stepsToAnimate[i-1].style = `--steps-delay: ${(lastStep-i) * 0.3}s`
        }
    }
    function resetBackStepsAnimation(){
        const steps = document.querySelectorAll('.step-container')
        steps.forEach(step =>{
            step.style = `--steps-delay: 0s`
        })
    }

    const resetedSchedulingState = {
        service: null,
        professional:  null,
        date: null,
        hour: null
    }

    useEffect(()=>{
        setTimeout(resetBackStepsAnimation, 400)
        
    },[activeStep])

    const reducer = (state, action)=>{
        switch(action.type){
            case 'setService':
                return {...resetedSchedulingState, service: action.value}
            case 'setProfessional':
                return {
                    ...resetedSchedulingState,
                    service: state.service, 
                    professional: action.value}
            case 'setDate':
                return {...state, hour: null, date: action.value}
            case 'setHour':
                return {...state, hour: action.value}
            default: 
                return state
        }
    }


    const [stateScheduling, dispatch] = useReducer(reducer, resetedSchedulingState)


    return(
        <optionContext.Provider value={{
            loginGoogle,
            logout,
            updateUser,
            loginEmailPassowrd,
            singUpEmailPassowrd,
            loading,
            user,
            stateScheduling, 
            dispatch, 
            activeStep, 
            setActiveStep, 
            setBackStepsAnimation
        }}>
            {children}
        </optionContext.Provider>
    )
}