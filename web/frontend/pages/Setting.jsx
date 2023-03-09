import React from 'react'
import { useState } from 'react';
import '../App.css';
import ToggleButton from './ToggleButton';


const Setting = () => {
const [status,setStatus] = useState(false);
   
const productFun = ()=>{
    setStatus(true);
}

const FindData = (data) => {
    console.log(data)
}

    return (
        <>
            <ToggleButton />
        </>
       

    )
}

export default Setting