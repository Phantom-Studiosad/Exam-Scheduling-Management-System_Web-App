import React from 'react';
import { Link } from 'react-router-dom';
function Logout(){
    return(
        <div>
            <h1>Logout successful</h1>
            <br/>
            <Link to = '/' style={{backgroundColor: "black",color : "white"
            ,textDecoration : "none",fontSize : 30}}>Go back to home page</Link>
            
        </div>
    );
}
export default Logout;