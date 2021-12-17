import React, { Component } from 'react';
import Admin from './admin-page'
import Admlogin from './alogin';
import fire from '../firebase';

class Alogin extends Component{
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
         <div>{this.state.user ? (<Admin/>) : (<Admlogin/>)}</div>)
    }
}
export default Alogin;