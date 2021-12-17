import React, { Component } from 'react'
import './forms.css'
import fire from '../firebase'

export default class Sadd extends Component{
   constructor(props){
      super(props);
      this.state = {
         S_ID: '',
         Semester: '',
         Fname: '',
         Lname: '',
         Email: '',
         Password: '',
         Dept: ''
       }
      this.handleChange=this.handleChange.bind(this);
      this.enroll=this.enroll.bind(this);
      this.auth=this.auth.bind(this);
   }
   handleChange (event) {
      this.setState({ [event.target.name]: event.target.value});
      this.setState({Dept:this.state.S_ID.slice(8,11)});
   }
   auth(){
      fire.auth().createUserWithEmailAndPassword(((this.state.S_ID).concat("@cb.students.amrita.edu")), this.state.Password);
      window.alert("Successful!!");
   }
   enroll(event){
      
      fire.firestore().collection("Student").doc(this.state.S_ID.toString()).set({
         Email: this.state.Email,
         Fname: this.state.Fname,
         Lname: this.state.Lname,
         Password: this.state.Password,
         S_ID: this.state.S_ID,
         Semester: this.state.Semester,
         Dept: this.state.Dept
     })
     .then(this.auth())
     .catch(function(error) {
         console.error("Error writing document: ", error);
     });
     event.preventDefault();
    }
   render(){
      return(
         <div>
         <h3 style={{fontFamily:"Roboto",marginLeft:"20px"}}>
            <b>STUDENT ENROLLMENT</b>
         </h3>
         <form>
         
         <ul style={{listStyle:"none"}}>
         <li><div>
         <input type="text" placeholder="Student_id" name="S_ID" onChange={this.handleChange} required/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
         <input type="text" placeholder="Semester" name="Semester" onChange={this.handleChange} required/>
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
           
    