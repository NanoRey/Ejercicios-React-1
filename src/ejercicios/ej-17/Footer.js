import React, { useContext } from "react"
import UserContext from "./Context/UserContext"

function Footer(props){
    const user=useContext(UserContext);

    function userId(){
        const UserItems=user.find((value)=>value.id===props.userId)
        return UserItems;
    }

    return (<>  
        <div className="blockquote-footer text-warning">Name: {userId().username}<br></br>
        <cite title="Source Title">Mail: {userId().email}</cite></div>
      </>) 
}

export default Footer;

// Meter funcion con find
