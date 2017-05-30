import React from 'react';
import Banner from './Banner.jsx';
import Head from './Head.jsx';
import Presentation from './Presentation.jsx';
import Keys from './Keys.jsx';
import Footer from './Footer.jsx';

class Container extends React.Component {

	constructor(props){
		super(props);
	}

	render() {
		return (
			<div id="container">
				<Head />
				<Banner />
				<Presentation />
				<div id="empty"></div> 
				<Keys />
				<div id="back_form_container"></div>
				<Footer />
			</div>
			);
	}
}

module.exports = Container;