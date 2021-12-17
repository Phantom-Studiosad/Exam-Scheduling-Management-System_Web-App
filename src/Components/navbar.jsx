import React from 'react';
import {Link} from 'react-router-dom';
import "./pages.css"
function Navbar(){
    return(
      <div style={{width:"fill",height:"53px",backgroundColor:" #333"}}>
      <img src="icon.png" width="53px" height="53px"/>
      <div style={{position:"absolute",left:"55px",top:"0px",color:"#f2f2f2",fontSize:"30px"}}><b>ESMS</b></div>
      <div class="topnav" style={{position:"absolute",right:"1%",top:"0px",color:"#f2f2f2",fontSize:"30px"}}>
      <a href="#news">News</a>
      <Link to = '/about'>About us</Link>
      </div>
      </div>
          
    );
}
export default Navbar;