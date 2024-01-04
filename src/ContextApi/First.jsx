import React from 'react'
import {data} from "./Parents";

function First() {
  return (
    <data.Consumer>
        {
            (value)=>{
                console.log(value);
                return <>
                   <h1> name of person :{value.name}</h1>
                   <h1> person age: {value.age}</h1>
                   <h1> person location :{value.location}</h1>
                   <h1> person aqucation :{value.equcation}</h1>
               
                </>
            }
        }
    </data.Consumer>
  )
}



export default First