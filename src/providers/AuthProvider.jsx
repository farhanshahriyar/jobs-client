/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from 'react'
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext({});
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

      // register user functionalities
      const createUser = async (email, password) => {
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }

    // login user functionalities
    const loginUser = async (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // 
    const googleSignIn = async () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // 
    const updateUser = async (name, image) => {
        setLoading(true)
        return updateProfile(auth.currentUser,{
            displayName: name,
            photoURL: image
        })
    }


    // logout functionalities
    const logoutUser = async () => {
        return signOut(auth)
    }

    // onAuthStateChanged
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
            // console.log('current user', currentUser)
            setLoading(false)
        }); 
        return () => {
            return unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        logoutUser,
        googleSignIn,
        updateUser
    }

  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
