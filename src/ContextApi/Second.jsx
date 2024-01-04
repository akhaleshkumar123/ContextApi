import React from 'react';
// import Third  from "./Third";
import{data} from "./Parents"
function Second(){
    return(
        <>
       <data.Consumer>
        {
            (value)=>{
                return <>
                 <h1> {value.name}</h1>
                </>
            }
        }
       </data.Consumer>
        </>
    )
}

export default Second;