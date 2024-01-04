import React from 'react';
import ChildB from './ChildB';


function ChildA({item}){
    return(
        <>
    
      <ChildB  item={item}/>
        </>

    ) 
}

export default ChildA;