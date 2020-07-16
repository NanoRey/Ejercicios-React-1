import React from 'react';
import MyState from './MyState';

class Ejercicio5c extends React.Component {
    
    constructor(props){
        super(props)
        this.state={
            newState:"MyText",
        }
    }

    render(){
        return (
        <MyState state={this.state.newState}/>
        );
    }
};

export default Ejercicio5c;