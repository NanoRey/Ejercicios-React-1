import React from 'react';

class MyClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {ipAddress:0};
    }

    async catchApi(){
        const catchFetch=await fetch("https://api.ipify.org/?format=json")
        console.log(catchFetch)
        const result=await catchFetch.json();
        console.log(result)
        this.setState({...this.state,ipAddress:result.ip})
    }

    componentDidMount(){
        this.catchApi();
    }

    render() {
        
        
        return (
            
            <div>
                {this.state.ipAddress===0
                ? <h1>Cargando...</h1>
                : <h1>Mi ip es {this.state.ipAddress}</h1>}
            </div>
        );
    }
}

export default MyClass;