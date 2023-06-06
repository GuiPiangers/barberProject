import Authentication from "../firebase/auth/Auth"
import Colection from "../firebase/db/Colection"

export default class Users {
    _authentication = new Authentication()
   _colection = new Colection()

    observeAuthentication(observer){
        return this._authentication.observeUser(async user => {
            observer(user ? {
                ...user,
                ...await this.search(user.id)
            } : null)
        })
    }

    async loginGoogle(){
        const user = await this._authentication.loginGoogle()
        if (!user) return null

        let userData = await this.search(user.id)
        if (!userData) userData = await this.set(user)

        return { ...user, ...userData }
    }
    async loginEmailPassword(email, password){
        const user = await this._authentication.loginEmailPassword(email, password)
        if (!user) return null

        let userData = await this.search(user.id)
        return { ...user, ...userData }
    }
    async createUserEmailPassword(email, password, name){
        const user = await this._authentication.createUserEmailPassword(email, password)
        if (!user) return null
        const newUser = {...user, name: name, image: 'http://localhost:5173/img/default-user.png'}

        let userData = await this.search(user.id)
        if (!userData) userData = await this.set(newUser)

        return { ...user, ...userData }
    }

    logout(){
        return this._authentication.logout()
    }

    async set(user) {
        return await this._colection.set(
            'users', user, user.id
        )
    }

    async search(id) {
        return await this._colection.getById(
            'users', id
        )
    }
}