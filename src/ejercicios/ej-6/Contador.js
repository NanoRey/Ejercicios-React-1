import React, {useState} from 'react';

//Modifica el componente <Contador> para poder mostrar cuántos clicks ha dado el usuario. 
//Debes almacenar el número de clicks en un estado del componente.


const Contador = () => {
    const [clicks,setClicks]= useState(0);

    const sumaClick = () => {
        console.log(clicks)
        setClicks(clicks+1)
    }

    return (
        <div className="alert alert-primary">
            <p><b>Has dado {clicks} clicks</b></p>
            <button className="btn btn-info" onClick={sumaClick}>suma 1</button>
        </div>
    );
};

export default Contador;