import React from 'react';
import FaTablet from 'react-icons/lib/fa/tablet';
import FaTelevision from 'react-icons/lib/fa/television';
import FaAreaChart from 'react-icons/lib/fa/area-chart';
import FaKey from 'react-icons/lib/fa/key';

class Keys extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {

		let content_key1 = "Épatez vos visiteurs et développez votre image de marque avec un site aux graphismes modernes sans en sacrifier la vitesse d'affichage, comme celui-ci";
		let content_key2 = "Offrez-vous un site capable de sublimer son contenu quel que soit le support et la taille de son écran : ordinateur, tablette, mobile";
		let content_key3 = "Nous concevons pour vous une stratégie de visibilité et de référencement web viable sur le long terme afin d'accompagner votre activité";
		let content_key4 = "Reprenez le contrôle quand vous le souhaitez grâce à nos explications et une interface d'administration simplifiée, ou laissez-nous tout faire pour vous";

		return (
			<div id="keys">
				<div class="key">
					<FaTelevision />
					<div class="key_content">
						<h3>Un design soigné</h3>
						{ content_key1 }
					</div>
				</div>
				<div class="key">
					<FaTablet />
					<div class="key_content">
						<h3>Compatible mobile</h3>
						{ content_key2 }
					</div>
				</div>
				<div class="key">
					<FaAreaChart />
					<div class="key_content">
						<h3>Stratégie experte</h3>
						{ content_key3 }
					</div>
				</div>
				<div class="key">
					<FaKey />
					<div class="key_content">
					<h3>Les clés du succès</h3>
						{ content_key4 }
					</div>
				</div>
			</div>
			);
	}
}

module.exports = Keys;