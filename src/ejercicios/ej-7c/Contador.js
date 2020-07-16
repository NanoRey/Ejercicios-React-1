import React from 'react';
import MyLabel from './MyLabel';
import Boton from './Boton';

class Contador extends React.Component{
    
    constructor(props){
        super(props)
        this.state={
            numOfClicks:0
        }
    }

    sumaClick = () => {
        this.setState({...this.state,numOfClicks:this.state.numOfClicks+1})
    }

    render(){
        return (
            <div className="alert alert-primary">
                <MyLabel state={this.state.numOfClicks}/>
                <Boton function={this.sumaClick} state={this.state.numOfClicks} />
            </div>
        );
    }
    
};

export default Contador;