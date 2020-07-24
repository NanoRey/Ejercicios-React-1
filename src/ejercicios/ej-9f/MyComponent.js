import React, {useState, useEffect} from 'react';

const  MyComponent =()=> {

    const [ipAdress,setIpAdress]=useState(0)

    async function catchApi(){
        const result1= await fetch("https://api.ipify.org/?format=json")
        const ip1= await result1.json();
        console.log(ip1)
        setIpAdress(ip1.ip);
    }

    useEffect(()=>{
        catchApi();
    })

    return (
        <h1>Mi ip es {ipAdress}</h1>
    );
    
}

export default MyComponent;