import React from 'react';
import fire from './firebase';
function Navout(){
    function Logout(){
            fire.auth().signOut();
    }
    return(
        <div style={{width:"fill",height:"53px",backgroundColor:" #333"}}>
        <img src="icon.png" width="53px" height="53px"/>
        <div style={{position:"absolute",left:"55px",top:"0px",color:"#f2f2f2",fontSize:"30px"}}><b>ESMS</b></div>
        <div class="topnav">
            <a onClick={Logout} style={{position:"absolute",right:"3px",top:"0px"}}><b>Logout</b></a>
        </div>
        </div>
    );
}
export default Navout;