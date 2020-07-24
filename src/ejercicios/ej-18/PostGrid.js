import React, { useContext } from "react"
import { Container, Row, Col, Button } from "reactstrap";
import PostContext from "../ej-17/Context/PostContext";
import Button2 from "./Button2";


function PostGrid(){
    
    const postArray=useContext(PostContext)
    //console.log(postArray)
    
    return(<>
                {postArray.map((value,index)=>{
                    return (<>
                        <div className="card mt-4">
                            <div className="card-header">
                                Post {index+1}
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{value.title}</h5>
                                <p className="card-text">{value.body}</p>
                                <Button2 value={value.id}/>
                            </div> 
                        </div>
                        </>) 
                    })
                }

    </>)
}

export default PostGrid;