import React, { Component } from 'react';
import Student from './student-page'
import Stulogin from './slogin';
import fire from '../firebase';

class Slogin extends Component{
    constructor() {
        super();
        this.state = ({
          user: null,
        });
        this.authListener = this.authListener.bind(this);
      }
    
      componentDidMount() {
        this.authListener();
      }
    
      authListener() {
        fire.auth().onAuthStateChanged((user) => {
          console.log(user);
          if (user) {
            this.setState({ user });
            localStorage.setItem('user', user.uid);
          } else {
            this.setState({ user: null });
            localStorage.removeItem('user');
          }
        });
      }
      render() {
        return (
         <div>{this.state.user ? (<Student/>) : (<Stulogin/>)}</div>)
    }
}
export default Slogin;