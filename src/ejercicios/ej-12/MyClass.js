import React from 'react';

class MyClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {chuckFact: '...'};
    }

    render() {
        return (
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <img src="https://media0.giphy.com/media/vN1OzukPWtDRVwgt4o/giphy.gif?cid=78e2744e76f031dbdbae116933b2bccb648ec1088b556490&rid=giphy.gif" />
                <button>Cargar frase</button>
                <h1>Chuck fact {this.state.chuckFact}</h1>
            </div>
        );
    }
}

export default MyClass;