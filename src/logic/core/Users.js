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
        const newUser = {...user, name: name, image: 'https://firebasestorage.googleapis.com/v0/b/barber-project-e7916.appspot.com/o/default-user.png?alt=media&token=a15d4522-5c0c-4d78-a3b1-4eaa3dab4602&_gl=1*1yf0o9w*_ga*MTY4OTQ5NDYwMi4xNjgzODM2NTc1*_ga_CW55HF8NVT*MTY4NjY3MzcxMi41Ni4xLjE2ODY2Nzc0OTYuMC4wLjA.'}

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