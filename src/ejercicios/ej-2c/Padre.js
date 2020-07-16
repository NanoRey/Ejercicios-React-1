import React from 'react';
import Hijo from "./Hijo";
import { render } from '@testing-library/react';

class Padre extends React.Component{

    render(){
        const printText = () => {
            console.log("Luke, yo soy tu padre");
        };

        return (
        <div className="alert alert-primary">
            <h4>Padre</h4>
            <Hijo function={printText} />
        </div>
    );
    }
    
};

export default Padre;