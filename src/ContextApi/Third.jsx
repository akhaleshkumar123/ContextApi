import React from 'react';
// import data from parent components  for cunsume data 
import {data} from "./Parents";

function Third(){
    return <>
    <data.Consumer>
        {
            (value)=>{
            
                return <>
                <h1> {value.name}</h1>
                <h1> {value.age}</h1>
                <h1> {value.color}</h1>
                <h1> {value.location}</h1>
                </>
            }
        }
    </data.Consumer>
      
    
    </>
}

export default Third;