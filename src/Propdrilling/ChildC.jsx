import React from 'react';
import ChildD from './ChildD';

function ChildC({item}){
    return <>

    <ChildD item={item}/>
    </>
}

export default ChildC;