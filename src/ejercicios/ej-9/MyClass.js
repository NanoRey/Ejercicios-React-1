import React from 'react';

class MyClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {ipAddress: '...'}
    }

    async componentDidMount(){
        const result=await fetch("https://api.ipify.org/?format=json");
        const ip= await result.json();
        console.log(ip)
        this.setState({ipAddress:ip.ip})
    }
    
    render() {
        return (
            <h1>Mi ip es {this.state.ipAddress}</h1>
        );
    }
}

export default MyClass;