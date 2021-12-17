import React, { Component } from 'react';
import fire from '../firebase';
import {Link} from 'react-router-dom'
import '../pages.css'



class Faclogin extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
      if(this.state.email.includes("cb.faculties.amrita.edu")){
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).catch((error) => {
      window.alert("Invalid credentials!!");
      });
    }
    else window.alert("Invalid credentials!!");
  }

   render() {
    return (
        <div>
        <div class="topnav" id="myTopnav">
            <Link to = '/'>Home</Link>
        </div>
        <h1 style={{color : "red",fontFamily : "fantasy"}}>Login as Faculty</h1>
     
       
      <div id="cred">
      <form>
       <label for="exampleInputEmail1">Email address</label>
       <input value={this.state.email} onChange={this.handleChange} type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
       <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small><br/><br/>
       <div><label for="exampleInputPassword1">Password</label></div>
       <input value={this.state.password} onChange={this.handleChange} type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Password" /><br/>
       <button type="submit" onClick={this.login} class="btn btn-5">Login</button>
      <br/>
      </form>
      </div>
     </div>
    );
  }
}
export default Faclogin;