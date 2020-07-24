import React, { useState, useEffect } from 'react';
import PostGrid from "./PostGrid"
import PostContext from '../ej-17/Context/PostContext';
import CommentsContext from './Context/CommentsContext';
import ViewComments from "./ViewComments"
import { Container, Row, Col, Button } from "reactstrap";

const App = () => {

    const setStateId = (id) => {
        console.log("eeeeeeeeeeepa" + id)
        setIdComments({
            ...idComments,
            idComment:id
        })
    }
    
    const [postArray,setPostArray]=useState([]);
    
    const [idComments,setIdComments]=useState({
        idComment:0,
        functionSet: setStateId
    });

    async function getPostApi(){
        const fecthApi=await fetch("https://jsonplaceholder.typicode.com/posts")
        const resultApi=await fecthApi.json();
        console.log(resultApi)
        setPostArray(resultApi);
    }

    useEffect (()=>{
        getPostApi()
    },[])
    
    return (
        <PostContext.Provider value={postArray}>
            <CommentsContext.Provider value={idComments}>
                <div>
                    <Container>
                        <Row >
                            <Col xs="6">
                                <PostGrid/>
                            </Col>
                            <Col xs="6">
                                <ViewComments/>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </CommentsContext.Provider>
        </PostContext.Provider>
    );
};

export default App;


// {(idComments.idComment!==0)
//     ? <ViewComments/>
//     : 0
//     }


//https://jsonplaceholder.typicode.com/posts
//https://jsonplaceholder.typicode.com/comments?postId=1