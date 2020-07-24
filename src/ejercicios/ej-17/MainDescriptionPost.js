import React, { useContext } from "react"
import PostContext from "./Context/PostContext";

const MainDescriptionPost=(props)=>{
    
    const post=useContext(PostContext)
    
    return(<>
        {post.map((value)=>{
            if(value.userId===props.indice){
                return (<div class="card-body">
                    <h5 class="card-title text-danger"> Titulo: {value.title}</h5>
                    <p class="card-text"> Contenido: {value.body}</p>
                </div>)   
            } 
        })}  
        
    </>)
}

export default MainDescriptionPost;