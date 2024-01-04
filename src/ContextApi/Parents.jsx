import React, { createContext } from 'react';
import First from './First';



// lets create context api  

const data=createContext();
function Parents() {
    const person={
        name:"amit",
        age:"30",
        location:'agra',
        height:'5.9',
        equcation:"mca"
    }
  return (
      <>
      <data.Provider value={person}>
      <First/>
      </data.Provider>
    
      </>
  )
}

export default Parents;
export {data};