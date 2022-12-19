export default function Card({ imageCarte, titre }) {
	
	return (
		<article className="carte-logement">
			<img src={imageCarte} alt="location" />
			<div className="carte-logement__ombre">
				<p className="carte-logement__titre">{titre}</p>
			</div>
		</article>
	);
}
