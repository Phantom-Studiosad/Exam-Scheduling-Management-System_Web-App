import React, { Component } from 'react'
import './forms.css'
import fire from '../firebase'
export default class Sdel extends Component{
   constructor(props){
      super(props);
      this.state = {
         S_ID: ''
      }
      this.handleChange=this.handleChange.bind(this);
      this.remove=this.remove.bind(this);
   }
   handleChange(event){
      this.setState({
         S_ID : event.target.value
      });
      console.log(this.state.S_ID);
     
   }
   remove(event){
      fire.firestore().collection("Student").doc(this.state.S_ID.toString()).delete()
      .then(
         window.alert((this.state.S_ID.toString()).concat(" is removed!"))
      )
      event.preventDefault();
   }
   render(){
      return(
         <div>
         <h3 style={{fontFamily:"Roboto",marginLeft:"20px"}}>
            <b>REMOVE STUDENT</b>
         </h3>
         <form>
         <div><input type="text" placeholder="Student_id" style={{marginLeft:"30px"}} onChange={this.handleChange} required/></div>
        
         <div><input type="submit" value="Remove" style={{marginBottom:"20px"}} onClick={this.remove}/></div>
        
        
        </form>
        </div>
      )
   }
}