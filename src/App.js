import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import Projects from './components/projects/Projects'
import About from './components/about/About'

function App() {
	return (
		<BrowserRouter className="App">
				<Navbar/>
				<Switch>
					<Route exact path="/" component={Home}/>
					<Route path="/Projects" component={Projects}/>
					<Route path="/About" component={About}/>
				</Switch>
		</BrowserRouter>
	)
}

export default App;
