import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import MainPage from './Components';
import Alogin from './Components/Admin/Admin-loginpg';
import Flogin from './Components/Faculty/Faculty-loginpg';
import Slogin from './Components/Student/Student-loginpg';
import About from './Components/about';

class App extends Component {
	render() {
		return <Router>
			<Switch>
				<Route exact path="/" component={MainPage} />
				<Route exact path="/slogin" component={Slogin} />
				<Route exact path="/flogin" component={Flogin} />
				<Route exact path="/alogin" component={Alogin} />
				<Route exact path="/about" component={About} />
			</Switch>
		</Router>
		}
}

export default App;
