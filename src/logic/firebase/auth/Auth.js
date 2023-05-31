import {
    GoogleAuthProvider, 
    getAuth, 
    onIdTokenChanged, 
    signInWithPopup, 
    signOut
} from 'firebase/auth'

import { app } from '../config/app'

export default class Authentication{

    _auth

    constructor(){
        this._auth = getAuth(app)
    }

    async loginGoogle(){
        const resp = await signInWithPopup(this._auth, new GoogleAuthProvider())
        return this._convertUser(resp.user)
    }
    async logout(){
        await signOut(this._auth)
    }

    observeUser(notify){
        return onIdTokenChanged(this._auth, async (firebaseUser) =>{
            const user = this._convertUser(firebaseUser)
            notify(user)
        })
    }

    _convertUser(firebaseUser){
        if (!firebaseUser?.email) return null

        return{
            id: firebaseUser.uid,
            name: firebaseUser.displayName,
            email: firebaseUser.email,
            image: firebaseUser.photoURL
        }
    }
}