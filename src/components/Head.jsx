import React from 'react';

class Head extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<header>
					<a className="mainLink" href="#">web.io</a>
					<div id="menu">
						<a href="#">Accueil</a>
						<a href="#">Pack commerçant</a>
						<a href="#">Ils nous font confiance</a>
					</div>
				</header>
			);
	}
}

module.exports = Head;