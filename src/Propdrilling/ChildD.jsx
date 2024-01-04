import React from 'react';


function ChildD({item}){
    return(
<>

<h1> New car name :{item.name}</h1>
<h1> New car barnd :{item.brand}</h1>
<h1> New car price :{item.price}</h1>
<h1> New car color:{item.color}</h1>

</>
    ) 
}


export default ChildD;