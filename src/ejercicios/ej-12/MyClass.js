import React from 'react';

class MyClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {chuckFact: '...'};
    }

    async catchApi(){
        const fetchNorris= await fetch("https://api.chucknorris.io/jokes/random")
        console.log(fetchNorris);
        const result= await fetchNorris.json();
        console.log(result);
        this.setState({chuckFact:result.value})
        
    }

    HandleClikButton=()=>{
        this.catchApi();
        console.log("Esta funcion se ejecuta")
    }

    render() {
        return (
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <img src="https://media0.giphy.com/media/vN1OzukPWtDRVwgt4o/giphy.gif?cid=78e2744e76f031dbdbae116933b2bccb648ec1088b556490&rid=giphy.gif" />
                <button onClick={this.HandleClikButton} >Cargar frase</button>
                <h1>Chuck fact {this.state.chuckFact}</h1>
            </div>
        );
    }
}

export default MyClass;