import React, { useContext } from 'react';
import MainDescriptionPost from '../MainDescriptionPost';
import UserContext from './UserContext';
import PostContext from './PostContext';

const BloquePost=(props)=>{
    
    const post=useContext(PostContext);
    const user=useContext(UserContext);
    
    return (<>
    {user.map((value)=>{
        return (<div class="card m-2 ">
        <h5 className="card-header strong text-white bg-dark  "> 
        Nombre:<p className="text-warning">{value.name}</p>
        UserName:<p className="text-warning">{value.username}</p>
        Mail:<p className="text-warning">{value.email}</p>
        </h5>
        <MainDescriptionPost indice={value.id} />    
    </div>)}
    )}
    </>)
}
export default BloquePost;