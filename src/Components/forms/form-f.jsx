import React, { Component } from 'react'
import './forms.css'
import fire from '../firebase'
export default class Fdel extends Component{
   constructor(props){
      super(props);
      this.state = {
         Course_ID: ''
      }
      this.handleChange=this.handleChange.bind(this);
      this.remove=this.remove.bind(this);
   }
   handleChange(event){
      this.setState({
         Course_ID : event.target.value
      });
          
   }
   remove(event){
      fire.firestore().collection("2019-2023").doc("Semester1").collection("Course").doc(this.state.Course_ID.toString()).delete()
      .then(
         window.alert((this.state.Course_ID.toString()).concat(" is removed!"))
      )
      event.preventDefault();
   }
   render(){
      return(
         <div>
         <h3 style={{fontFamily:"Roboto",marginLeft:"20px"}}>
            <b>REMOVE COURSE</b>
         </h3>
         <form>
         <div><input type="text" placeholder="Course_id" style={{marginLeft:"30px"}} onChange={this.handleChange} required/></div>
        
         <div><input type="submit" value="Delete" style={{marginBottom:"20px"}} onClick={this.remove}/></div>
        
        
        </form>
        </div>
      )
   }
}