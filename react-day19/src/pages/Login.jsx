import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login(){
    const [name , setName] = useState("");
    const {login} = useAuth();
    const navigate = useNavigate();

    function submit(e){
        e.preventDefault();

        if (!name.trim());
//facke login

     login(name.trim());
        //after login , go to proifle
       navigate("/profile") ;
    }

  return(
    <div>
        <h1>login</h1>

        <form onSubmit={submit} style={{display:"grid" , gap: 10 , maxWidth:320 }}>
            <input 
            value={name}
            onChange={(e)=> setName(e.target.value)}
            placeholder="Enter your name..."
            />
            <button type="submit">Login</button>
        </form>
    </div>
  );
}

export default Login;