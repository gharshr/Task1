import React from 'react';
import logo from './home.png';
import './App.css';

class App extends React.Component {
	render(){
		return(
			<div className="top">
				<div className="left">
					<img src={logo} className='logo'></img>
					<a href="#home">Home</a>
					<a href="#news">Moments</a>
					<a href="#contact">Notifications</a>
					<a href="#about">Messages</a>
				</div>
				<div className="logo">				
					<img src="https://png.icons8.com/color/50/000000/twitter.png"></img>
				</div>
				<div className="r">
					<input type="texbox" name="search" placeholder="Search Twitter"></input>
				</div>
			</div>
		)
	}
}	 
//var x=()=>"hello"
export default App
//export default top
