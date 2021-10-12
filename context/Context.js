import {useContext, useState, useEffect, createContext} from 'react'
import { auth } from '../firebase'

const AuthContext = createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({children}){
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    function signup(email, password){
        return auth.createUserWithEmailAndPassword(email, password)
    }

    function login(email, password){
        return auth.signInWithEmailAndPassword(email, password)
    }

    function forgotPassword(email){
        return auth.sendPasswordResetEmail(email)
    }

    function signOut(){
        return auth.signOut()
    }

    const value = {
        currentUser,
        signup,
        login,
        forgotPassword,
        signOut
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })

        return unsubscribe
    },[])

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}