import './global.css';

function Card(props) { 
	console.log(props.description);
	return (
	<div className="card">
		<h3>{props.title}</h3>
		<p>{props.description}</p>
	</div>);
}

export default Card;
