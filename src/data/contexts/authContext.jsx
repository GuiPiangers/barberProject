import { createContext, useState, useEffect } from "react"
import Users from "../../logic/core/Users"

const authContext = createContext(null)
export default authContext

export function ContextProvider({children}){

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
    async function singUpEmailPassowrd(email, password, name){
        const loggedUser = await users.createUserEmailPassword(email, password, name)
        setUser(loggedUser)
    }
    async function logout(){
        await users.logout()
        setUser(null)
    }

    useEffect(()=>{
        const cancel = users.observeAuthentication(async (user)=>{
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

    return(
        <authContext.Provider value={{
            loginGoogle,
            logout,
            updateUser,
            loginEmailPassowrd,
            singUpEmailPassowrd,
            loading,
            user
        }}>
            {children}
        </authContext.Provider>
    )
}