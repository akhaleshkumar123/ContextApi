import React from 'react';
import { useFirebase } from './firebase';


function SighUp() {
    const firebase=useFirebase()
    console.log(firebase);
  return (
    <>

    <div style={{display:"flex",  flexDirection:"column",  alignItems:"center", gap:"10px"}}>
    <label>Please enter your email ":</label>
    <input type="email" />
    <br />
    <label> Please enter your password:</label>
    <input type="password" />
    <button onClick={()=>{}}> SighUp </button>
    </div>
    </>
  )
}

export default SighUp;