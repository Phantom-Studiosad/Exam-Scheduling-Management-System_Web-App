import React,{Component} from 'react';
import { Redirect } from 'react-router-dom';
import Navbar from './navbar';
import './component.css';



class MainPage extends Component {
    state = {
      toslogin: false,
      totlogin: false,
      toalogin: false,
    }
    handleSubmit1 = (user) => {
      this.setState(() => ({
          toslogin: true
        }))
    }
    handleSubmit2 = (user) => {
      this.setState(() => ({
          totlogin: true
        }))
    }
    handleSubmit3 = (user) => {
      this.setState(() => ({
          toalogin: true
        }))
    }
    render() {
      if (this.state.toslogin === true) {
        return <Redirect to='/Slogin' />
      }
      else if (this.state.totlogin === true) {
        return <Redirect to='/Flogin' />
      }
      else if(this.state.toalogin === true) {
        return <Redirect to='/Alogin' />
      }
      
  
      return(
        <div>
            <Navbar />
            <h1 style={{textAlign : "center", color : "orange",fontFamily:"serif"}}><b>EXAM SCHEDULING MANAGEMENT SYSTEM</b></h1>
            <br/><br/><br/><br/><br/>          
            <div>
            <p><button class="color-1 btn btn-1 btn-1e" onClick={this.handleSubmit1}><b>Student</b></button></p>
            <p><button class="color-1 btn btn-1 btn-1c" onClick={this.handleSubmit2}><b>Faculty</b></button></p>
            <button class="color-3 btn btn-1 btn-1f" onClick={this.handleSubmit3}><b>Admin</b></button>
            </div>
        </div>
     );
 
    }
  }
    
export default MainPage;