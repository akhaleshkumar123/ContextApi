import React from 'react';
import ChildC from './ChildC';


function ChildB({item}){
    return<>

    <ChildC  item={item}/>
    </>
}

export default ChildB;