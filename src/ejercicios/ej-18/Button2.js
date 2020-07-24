import React, { useContext } from "react"
import CommentsContext from "./Context/CommentsContext";

function Button2(props){
    
    const comentsContext=useContext(CommentsContext);

    //console.log(comentsContext);

    return(<button onClick={()=>comentsContext.functionSet(props.value)} className="btn btn-primary" value={props.value}>Ver comentarios</button>)
}

export default Button2;