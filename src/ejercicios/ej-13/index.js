import React from "react";
import Layout from "./Layout";
import HelloWorld from "./HelloWorld";

/*https://es.reactjs.org/docs/composition-vs-inheritance.html*/

const Ejercicio13 = (props) => {
    
    const result="XXXXXX pasar por prop sin pasar por padre (Abuelo-nieto)"

    return (
        <Layout>
            <HelloWorld hello={result}></HelloWorld>
        </Layout>
    );
}
export default Ejercicio13;