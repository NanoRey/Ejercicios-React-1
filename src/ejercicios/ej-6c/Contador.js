import React from 'react';

class Contador extends React.Component {
    
    constructor(props){
        super(props);
        this.state={
            control:0,
        };
    };

    sumaClick = () => {
        this.setState({...this.state,control:this.state.control+1})
    }

    render (){
     return (
        <div className="alert alert-primary">
            <p><b>Has dado {this.state.control} clicks</b></p>
            <button className="btn btn-info" onClick={this.sumaClick}>suma 1</button>
        </div>
    );   
    }
    
};

export default Contador;