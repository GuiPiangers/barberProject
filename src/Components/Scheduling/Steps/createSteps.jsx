import Step from "./Step"

export default function createSteps(array){
    return function(){
        return (
            <div className="nav-steps__container">
            {array.map((step, index) =>{
                return(
                    <Step
                        text={step}
                        stepNumber={index + 1}
                        key={index}
                    />)
            })}
            </div>
        )

    }
}