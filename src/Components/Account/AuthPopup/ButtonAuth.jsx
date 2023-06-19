import Button from "../../usual/Button/Button";

export default function ButtonAuth({children, ...props}){
    return(
    <Button 
        style={{gap:'16px'}} 
        customClass='button--primary button--big'
        {...props} 
    >
        {children}
    </Button> 
    )
}