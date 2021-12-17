import React, { Component } from 'react';
import Faculty from './faculty-page'
import Faclogin from './flogin';
import fire from '../firebase';

class Flogin extends Component{
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
         <div>{this.state.user ? (<Faculty/>) : (<Faclogin/>)}</div>)
    }
}
export default Flogin;