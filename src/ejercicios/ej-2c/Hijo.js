import React from 'react';

class Hijo extends React.Component{
    render(props){
        return (
            <div className="alert alert-success">
                <h4>Hijo</h4>
                <button onClick={this.props.function} className="btn btn-info">¡Dar click aquí!</button>
            </div>
        );
        }
};

export default Hijo;