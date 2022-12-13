import { Link } from "react-router-dom";

export default function pageError() {
	return (
		<div className="error_Container">
			<p className="error_Numero">404</p>
			<p className="error_Text">Oups! La page que vous demandez n'existe pas.</p>
			<Link to="/" className="error_Retour_Page_Acceuil">
				Retourner sur la page d’accueil
			</Link>
		</div>
	);
}