import React, { useContext } from "react"
import UserContext from "./Context/UserContext"
import PostContext from "./Context/PostContext";
import Footer from "./Footer";

function CitaPorQuien(){
    const post=useContext (PostContext);
    const user=useContext(UserContext);

    return (
        <div class="card">
            {post.map((value)=>{
                    return(<>
                        <div class="card-header">
                            <p>{value.title}</p>
                        </div>
                        <div class="card-body">
                            <blockquote class="blockquote mb-0 text-primary">
                                <p>{value.body}</p>
                                <Footer userId={value.userId}/>   
                            </blockquote>
                        </div>
                    </>)
            })}
        </div>
    )

}

export default CitaPorQuien;