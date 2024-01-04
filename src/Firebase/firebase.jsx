import { createContext, useContext } from 'react';
import {initializeApp, }  from "firebase/app"
import {getAuth, createUserWithEmailAndPassword}  from "firebase/auth";
import {getDatabase, ref ,set }  from "firebase/database"




// configring the firebase 
// const firebaseConfig = {
//     apiKey: "AIzaSyCTZLwdawdP2nXL-GFAIk5fIce-igJHOmA",
//     authDomain: "writeway-to-use-firebsae.firebaseapp.com",
//     projectId: "writeway-to-use-firebsae",
//     storageBucket: "writeway-to-use-firebsae.appspot.com",
//     messagingSenderId: "355178030777",
//     appId: "1:355178030777:web:5c4f5c13ba69e92be99d68",
//     databaseURL:'https://writeway-to-use-firebsae-default-rtdb.firebaseio.com'
//   };

  const firebaseConfig = {
    apiKey: "AIzaSyCTZLwdawdP2nXL-GFAIk5fIce-igJHOmA",
    authDomain: "writeway-to-use-firebsae.firebaseapp.com",
    projectId: "writeway-to-use-firebsae",
    storageBucket: "writeway-to-use-firebsae.appspot.com",
    messagingSenderId: "355178030777",
    appId: "1:355178030777:web:5c4f5c13ba69e92be99d68",
    databaseURL:'https://writeway-to-use-firebsae-default-rtdb.firebaseio.com/'
  };



  // we confige the firebase app 
  const app=initializeApp(firebaseConfig);

  // config authantication 
  const auth=getAuth(app);
  const databaseauth= getDatabase(app)

const firebasecontext=createContext(null);

// now need to create custom hooks for  using 

   export   const useFirebase=()=>useContext(firebasecontext)


  export const firebaseprovider=(props)=>{

    // this function for  sighup only
    const createuserwithemailandpassword=(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const sendata = (key, data) => {
        return  set(databaseauth, key, data);
    };
    
    <firebasecontext.Provider value={{createuserwithemailandpassword, sendata}}>
         {props.children}
    </firebasecontext.Provider>


}


