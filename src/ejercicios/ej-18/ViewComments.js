import React, { useContext, useEffect, useState } from "react"
import { Container,Row,Col } from "reactstrap";
import CommentsContext from "./Context/CommentsContext";
import PostContext from "../ej-17/Context/PostContext";

function ViewComments(){

    const idComments=useContext(CommentsContext);
    //const user=useContext(PostContext);
    const [arrayComments,setArrayComments]=useState([])

    async function catchComments(){
        const URL=`https://jsonplaceholder.typicode.com/comments?postId=${idComments.idComment}`
        console.log(URL)
        const fetchComments=await fetch(URL);
        const resultFetch=await fetchComments.json();
        setArrayComments(resultFetch);
    }

    useEffect(()=>{
        catchComments();
    },[idComments.idComment])

    return(<>
            {arrayComments.map((value)=>{
                return (<>
                <div class="card text-white bg-dark mt-3" style={{maxWidth:"28rem"}}>
                    <div class="card-header">{value.email}</div>
                    <div class="card-body">
                        <h5 class="card-title">{value.name}</h5>
                        <p class="card-text">{value.body}</p>
                    </div>
                </div> 
                </>)
            })}
    </>)
}

export default ViewComments;

