import React from 'react';
import ChildA from './ChildA';

function ParentsComponents(){
    // we have have data and want to send d components 
   // const name='rahul'

    // sending object data to D components 

    const car={
        name:" swift dzire ",
        brand:"maruti suzuki",
        price:"5lakh",
        color:"red",
    }
    
    return (

        <>
          <ChildA  item={car}/>
        </>
    )
   
  
    
}

export default ParentsComponents;