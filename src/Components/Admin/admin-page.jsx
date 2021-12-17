import React, { Component,Fragment } from 'react'
import * as Forms from '../forms'
import Navout from '../navout'
import '../pages.css'



class Admin extends Component {
 constructor(props) {
   super(props)
 
   this.state = {
     s_form: ''
   }
   this.clickHandler=this.clickHandler.bind(this)
 }
 clickHandler(){
    return(
        <div style={{position:"absolute",top:"30%",left:"3.5%"}}>
            <p style={{fontFamily:"sans-serif",color:"#0ff517",fontSize:"20px",marginLeft:"100px"}}><b>SELECT FORM</b></p>
            <div style={{marginLeft:"20px"}}><button className="fbutton" onClick={(e) => {this.setState({s_form: 'A'})}}>Student Enrollment form</button></div>
            <div style={{marginLeft:"20px"}}><button className="fbutton" onClick={(e) => {this.setState({s_form: 'B'})}}>Student Removal form</button></div>
            <div style={{marginLeft:"20px"}}><button className="fbutton" onClick={(e) => {this.setState({s_form: 'C'})}}>Faculty Enrollment form</button></div>
            <div style={{marginLeft:"20px"}}><button className="fbutton" onClick={(e) => {this.setState({s_form: 'D'})}}>Faculty Removal form</button></div>
            <div style={{marginLeft:"20px"}}><button className="fbutton" onClick={(e) => {this.setState({s_form: 'E'})}}>Course Enrollment form</button></div>
            <div style={{marginLeft:"20px"}}><button className="fbutton" onClick={(e) => {this.setState({s_form: 'F'})}}>Course Removal form</button></div>
            <div style={{marginLeft:"20px"}}><button className="fbutton" style={{backgroundColor:"red"}} onClick={(e) => {this.setState({s_form: 'Exam'})}}>Create Examination</button></div>            
        </div>
    )
 }
 renderform(s_form){
     if(!s_form)
     {
         return(<h2 align="center">Form renders here!</h2>)
     }
     const Fm = Forms[s_form];
     return <Fm />
 }


  render() {
    return (
     <Fragment>
         <Navout/>
         <div>
         <div>
         <h1 style={{color:"#fff",fontFamily:"serif",marginLeft:"1%"}}><b>Hello Admin</b></h1>
            <h1 style={{color:"red",fontFamily:"serif",marginLeft:"40%",position:"absolute",top:"10%"}}><b>FUNCTIONALITIES</b></h1>
         </div>
         <section>
             {this.clickHandler()}
             <div style={{position:"absolute",right:"5%",top:"30%",width:"600px",backgroundColor:"#fed000",color:"#242424",borderRadius:"30px",fontFamily:"serif"}}>
                 {}
                 {this.renderform(this.state.s_form)}
             </div>
         </section>
         </div>
     </Fragment>
    )
  }
}

export default Admin;
