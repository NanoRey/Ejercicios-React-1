import React, { useState } from 'react';
import MyLabel from './MyLabel';
import Boton from './Boton';

const Contador = () => {
    const [numClicks,setNumClicks]=useState(0);

    const sumaClick = () => {
        setNumClicks(numClicks+1)
    }

    return (
        <div className="alert alert-primary">
            <MyLabel state={numClicks} />
            <Boton function={sumaClick} />
        </div>
    );
};

export default Contador;