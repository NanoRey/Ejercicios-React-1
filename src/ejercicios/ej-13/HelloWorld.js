import React from 'react';

const HelloWorld = (props) => {
    return (
        <div className="alert alert-success">
            <h1>Hola Mundo</h1>
            <p>{props.hello}</p>
        </div>
    );
};

export default HelloWorld;