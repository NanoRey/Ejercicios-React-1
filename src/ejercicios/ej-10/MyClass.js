import React from 'react';

class MyClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {ipAddress: '...'};
    }

    // Intersante lectura relacionada con el manejo de errores con await https://javascript.info/async-await#error-handling

    //Con lo aprendido en el ejercicio anterior, utilizar un api que falla https://api.ipify.org/pepe/?format=json 
    //y que en caso de error mostrar como ip 'Error'.


    async catchApi(){
        try {
            const fetchItem=await fetch("https://api.ipify.org/pepe/?format=json ")
            console.log(fetchItem)

            if(fetchItem.status!==200){
                console.log(`Este error es el ${fetchItem.status}`)
                this.setState({ipAddress:`Error ${fetchItem.status}`})
            }

            const resultFetch=await fetchItem.json();
            console.log(resultFetch)
            this.setState({ipAddress:resultFetch.ip})
            
        } catch(err) {
            //await Promise.reject(new Error("Whoops!")
            //this.setState({ipAddress:"Error"});
        }        
    }

    componentDidMount(){
        this.catchApi();
    }

    render() {
        return (
            <h1>Mi ip es {this.state.ipAddress}</h1>
        );
    }
}

export default MyClass;