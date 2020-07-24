import React, { useEffect, useState } from 'react';
import BloquePost from "./Context/BloquePost"
import PostContext from './Context/PostContext';
import UserContext from './Context/UserContext';
import CitaPorQuien from "./CitaPorQuien";

const App = () => {
    const [user, setUser]=useState([])
    const [post, setPost]=useState([]);
    
    async function catchApiUser(){
        const userFetch= await fetch("https://jsonplaceholder.typicode.com/users");
        const resultUser= await userFetch.json();
        console.log(resultUser);
        setUser(resultUser)
    }

    async function catchApiPost(){
        const postFetch= await fetch("https://jsonplaceholder.typicode.com/posts");
        const resultPost= await postFetch.json();
        console.log(resultPost);
        setPost(resultPost);
    }
    
    useEffect(()=>{
        catchApiUser();
        catchApiPost();
    },[])

    return (
        <UserContext.Provider value={user}>
            <PostContext.Provider value={post}>
                <div>
                <CitaPorQuien/>
                </div>
            </PostContext.Provider>   
        </UserContext.Provider>
        
    );
};

export default App;