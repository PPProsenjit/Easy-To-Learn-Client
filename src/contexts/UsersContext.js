import React, { useEffect } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { useState } from 'react';
import { createContext } from 'react';
import app from '../firebase/Firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const UsersContext = ({children}) => {

    const [user, setUser] =useState({});
    const [userSignIn, setUserSignIn] = useState({});

    const googleProvider = new GoogleAuthProvider();

    const githubProvider = new GithubAuthProvider();

    const createUser = ( email,password) => {

       return createUserWithEmailAndPassword( auth, email, password);

    }
    const signIn = (email, password ) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle = ()=>{
        return signInWithPopup(auth,googleProvider);
    }

    const signInWithGithub = ()=>{
        return signInWithPopup(auth,githubProvider);
    }

    const logOut = () =>{
        return signOut(auth);
    }
    const profileEdit =(profile) =>{
        return updateProfile(auth.currentUser, profile);
    }

    useEffect( () => {
       const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            console.log('Auth state change',currentUser);
        }) 
        return(()=>{
            unSubscribe();
        })


    },[userSignIn])
    
    const authInfo = {user,setUserSignIn, createUser, signIn,profileEdit, logOut, signInWithGoogle,signInWithGithub};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UsersContext;