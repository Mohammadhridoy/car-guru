import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../Firebase/firebase";


export const AuthContext = createContext(null)
const provider = new GoogleAuthProvider();

const providergit = new GithubAuthProvider(); 



const AuthProvider = ({children}) => {
    
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    const createUser = (email, password) =>{
        setLoading(true)

        return createUserWithEmailAndPassword(auth, email, password )
        
    }

    const singInUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googelSingin = () =>{
        signInWithPopup(auth, provider)
        .then(result => {
            console.log(result.user)
        })
        .catch(error =>{
            console.log(error.message)
        })

    }

    const githublogin = () =>{
        signInWithPopup(auth, providergit)
        .then(result=>{
            console.log(result.user)
        })
        .catch(error =>{
            console.log(error.message)
        })
    }


    useEffect(()=>{
     const unsubscribe =   onAuthStateChanged(auth, currentUser =>{
            console.log(currentUser)
            setUser(currentUser)
            setLoading(false)
        });
        return () =>{
            unsubscribe()
        }
    },[])

    const logOut = () =>{
        return signOut(auth)
    }

    const authInfo = {
        user,
        createUser,
        singInUser,
        logOut,
        loading,
        googelSingin,
        githublogin
    }



    return (
         <AuthContext.Provider value={authInfo} >
          { children}
        </AuthContext.Provider >
    );
};

AuthProvider.propTypes = {
    children:PropTypes.node
}


export default AuthProvider;