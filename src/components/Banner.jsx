import React from 'react';
import Fade from 'react-fade';

class Banner extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {
		let content = "Besoin d'un site web moderne ?";
		let subcontent = "Un site internet donne plus de visibilité à votre activité";

		return (
			<div id="banner">
				<Fade>
				<div className="content">{content}</div>
				<div className="subcontent">{subcontent}</div>
				</Fade>
			</div>
			);
	}

}

module.exports = Banner;