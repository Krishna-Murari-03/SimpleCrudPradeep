import React,{useState} from 'react';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

function Login() {
    // let history = useHistory();
    const handle=()=>{
        window.location = "/manager";
    }
    
  return(
<>
<div style={{margin:"auto", width:"50%", display:"flex", alignitem:"center", flexDirection:"column"}}>
       <strong>Manager Detail</strong>
       <hr />
    <input style={{padding:"10px 3px",width:"80%", marginBottom:"20px"}} type="text" placeholder="enter manager email..." />
    <input style={{padding:"10px 3px", width:"80%"}} type="text" placeholder="enter manager password..." />
    <Link to={"/manager"} style={{width:"80%", background:"pink",curser:"pointer", marginTop:"20px", padding:"10px 10px"}}>Login</Link>
    </div>
<br />
<br />
<br />
    <div style={{margin:"auto", width:"50%", display:"flex", alignitem:"center", flexDirection:"column"}}>
       <strong>User Detail</strong>
       <hr />
    <input style={{padding:"10px 3px",width:"80%", marginBottom:"20px"}} type="text" placeholder="enter user email..." />
    <input style={{padding:"10px 3px", width:"80%"}} type="text" placeholder="enter user password..." />
    <Link to={"/user"} style={{width:"80%", background:"pink",curser:"pointer", marginTop:"20px", padding:"10px  10px", textDecoraion:"none"}} >Login</Link>
    </div>
</>
  )
}

export default Login;
