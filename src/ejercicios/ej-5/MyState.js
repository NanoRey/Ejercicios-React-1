import React, { useState } from "react";

const MyState = () => {
    const valor="Hola mundo"
    const [myText,setMyText]= useState (valor);

    return (
        <div className="alert alert-primary">
            <p onClick={()=>setMyText("asd")}>El valor por defecto del estado es:   {myText}</p>
        </div>
    );
};

export default MyState;