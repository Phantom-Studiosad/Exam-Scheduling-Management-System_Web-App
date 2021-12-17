import React, { Component } from 'react'
import './forms.css'
import fire from '../firebase'
export default class Fdel extends Component{
   constructor(props){
      super(props);
      this.state = {
         F_ID: ''
      }
      this.handleChange=this.handleChange.bind(this);
      this.remove=this.remove.bind(this);
   }
   handleChange(event){
      this.setState({
         F_ID : event.target.value
      });
          
   }
   remove(event){
      fire.firestore().collection("Faculty").doc(this.state.F_ID.toString()).delete()
      .then(
         window.alert((this.state.F_ID.toString()).concat(" is removed!"))
      )
      event.preventDefault();
   }
   render(){
      return(
         <div>
         <h3 style={{fontFamily:"Roboto",marginLeft:"20px"}}>
            <b>REMOVE FACULTY</b>
         </h3>
         <form>
         <div><input type="text" placeholder="Faculty_id" style={{marginLeft:"30px"}} onChange={this.handleChange} required/></div>
        
         <div><input type="submit" value="Remove" style={{marginBottom:"20px"}} onClick={this.remove}/></div>
        
        
        </form>
        </div>
      )
   }
}