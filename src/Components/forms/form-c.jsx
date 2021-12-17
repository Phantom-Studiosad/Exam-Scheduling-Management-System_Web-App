import React, { Component } from 'react'
import './forms.css'
import fire from '../firebase'

export default class Fadd extends Component{
   constructor(props){
      super(props);
      this.state = {
         F_ID: '',
         Major: '',
         Fname: '',
         Lname: '',
         Email: '',
         Password: '',
       }
      this.handleChange=this.handleChange.bind(this);
      this.enroll=this.enroll.bind(this);
      this.auth=this.auth.bind(this);
   }
   handleChange (event) {
      this.setState({ [event.target.name]: event.target.value});
   }
   auth(){
      fire.auth().createUserWithEmailAndPassword(((this.state.F_ID).concat("@cb.faculties.amrita.edu")), this.state.Password);
      window.alert("Successful!!");
   }
   enroll(event){
      fire.firestore().collection("Faculty").doc(this.state.F_ID.toString()).set({
         Email: this.state.Email,
         Fname: this.state.Fname,
         Lname: this.state.Lname,
         Password: this.state.Password,
         F_ID: this.state.F_ID,
         Major: this.state.Major
     })
     .then(this.auth())
     .catch(function(error) {
         window.alert("error" + error);
     });
     event.preventDefault();
    }
   render(){
      return(
         <div>
         <h3 style={{fontFamily:"Roboto",marginLeft:"20px"}}>
            <b>FACULTY ENROLLMENT</b>
         </h3>
         <form>
         
         <ul style={{listStyle:"none"}}>
         <li><div>
         <input type="text" placeholder="Faculty_id" name="F_ID" onChange={this.handleChange} required/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
         <input type="text" placeholder="Major" name="Major" onChange={this.handleChange} required/>
         </div></li>    
         <li><div>
         <input type="text" placeholder="First name" name="Fname" onChange={this.handleChange} required/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
         <input type="text" placeholder="Lastname" name="Lname" onChange={this.handleChange} required/>
         </div></li>    
         <li><div>
         <input type="text" placeholder="Email" name="Email" onChange={this.handleChange} required/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
         <input type="text" placeholder="Password" name="Password" onChange={this.handleChange} required/>  
         </div></li>    
         <li><div>
         <input type="submit" value="Enroll" onClick={this.enroll}/></div></li>
         </ul>
        
        </form>
        </div>
 );
   }
} 
           
    