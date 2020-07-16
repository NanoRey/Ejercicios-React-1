import React from 'react';

class MyState extends React.Component{
    
    render(){
        return (
        <div className="alert alert-primary">
            <p>El valor por defecto del estado es: {this.props.state}</p>
        </div>
        );
    }
};

export default MyState;