'use client'

import { createContext , useContext, useEffect, useState } from "react";
import { getAuth , GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { app } from "@/firebase/config";


const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthContext = createContext();



export const AuthContextProvider = ({children})=>{
    const [user,setUser] = useState()
    // console.log(user)

    const SignIn = ()=>{

        signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

    }


    const SignOut = ()=>{
        signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});

    }




    useEffect( ()=>{
        
     const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user;
    setUser(uid)
    // ...
  } else {
    // User is signed out
    // ...
  }
},[]);
    })

    return (
        <AuthContext.Provider value={{user,SignIn , SignOut}}>
        {children}
    </AuthContext.Provider>
    )
}

export const UseAuth = ()=>{
    return useContext(AuthContext)
}

