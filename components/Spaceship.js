const React = require('react');

class Spaceship extends React.Component{
	render(){
		return(
			<div>
				<p> {this.props.name} </p>
				<p> {this.props.speed} </p>
				<p> {this.props.hasRockets} </p>
				<p> {this.props.colors} </p>
			</div>	
		)
	}
}

Spaceship.props = {
	name: "Millenium Falcon",
	speed: 500,

}

Spaceship.defaultProps = {
	hasRockets: false,
	colors: ['black', 'red']
}

module.exports = Spaceship