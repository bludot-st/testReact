import React from 'react';

class Presentation extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="presentation">
				<div className="gauche">
					<h3>Le défi</h3>
					Les particuliers et professionnels s’informent et se dirigent de plus en plus grâce à internet que ça soit depuis chez eux ou en déplacement via leurs appareils mobiles. C’est pour cela qu’il est nécessaire d’être présent à part entière dans cet espace numérique afin de profiter d’une visibilité inédite ainsi que pour développer une image de marque.</div>
				<div className="droite">
					<h3>La solution</h3>
					Passionnés de nouvelles technologies depuis tous jeunes, nous concevons chez Citronline de magnifiques sites web pour nos clients : ils disposent d’un espace propre sur internet dont ils sont fiers afin de présenter leur activité. Nous utilisons les dernières technologies et stratégies du web afin de vous permettre d’être facilement trouvable depuis n’importe où.</div>
			</div>
			);
	}
}

module.exports = Presentation;