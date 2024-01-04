
import React from 'react';
import {firebaseprovider} from "./firebase";
import SighUp from './SighUp';



function Parentcomponentsforfirebase() {
  return ( 
     <>
    <firebaseprovider>
    <SighUp/>
     </firebaseprovider>
   
   </>
  )
}

export default Parentcomponentsforfirebase;