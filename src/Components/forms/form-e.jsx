import React, { Component } from 'react'
import './forms.css'
import fire from '../firebase'

export default class Cadd extends Component{
   constructor(props){
      super(props);
      this.state = {
         Course_ID: '',
         C_name: '',
         credits: '',
         
       }
      this.handleChange=this.handleChange.bind(this);
      this.enroll=this.enroll.bind(this);
      
   }
   handleChange (event) {
      this.setState({ [event.target.name]: event.target.value});
   }
  
   enroll(event){
      fire.firestore().collection("2019-2023").doc("Semester1").collection("Course").doc(this.state.Course_ID.toString()).set({
         Course_ID: this.state.Course_ID,
         C_name: this.state.C_name,
         credits: this.state.credits
     })
     .then(window.alert("Successful!"))
     .catch(function(error) {
         window.alert("error" + error);
     });
     event.preventDefault();
    }
   render(){
      return(
         <div>
         <h3 style={{fontFamily:"Roboto",marginLeft:"20px"}}>
            <b>COURSE ENROLLMENT</b>
         </h3>
         <form>
         
         <ul style={{listStyle:"none"}}>
         <li><div>
         <input type="text" placeholder="Course_id" name="Course_ID" onChange={this.handleChange} required/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
         <input type="text" placeholder="Course_name" name="C_name" onChange={this.handleChange} required/>
         </div></li>    
         <li><div>
         <input type="text" placeholder="credits" name="credits" onChange={this.handleChange} required/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
        
         </div></li>    
         <li><div>
         <input type="submit" value="Register" onClick={this.enroll}/></div></li>
         </ul>
        
        </form>
        </div>
 );
   }
} 
           
    