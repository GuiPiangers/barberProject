import Authentication from "../firebase/auth/Auth"
import Colection from "../firebase/db/Colection"

export default class Users {
    _authentication = new Authentication()
   _colection = new Colection()

    observeAuthentication(observer){
        return this._authentication.observeUser(async user => {
            observer(user ? {
                ...user,
                ...await this.search(user.email)
            } : null)
        })
    }

    async loginGoogle(){
        const user = await this._authentication.loginGoogle()
        if (!user) return null

        let userData = await this.search(user.email)
        if (!userData) userData = await this.set(user)

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

    async search(email) {
        return await this._colection.getById(
            'users', email
        )
    }
}