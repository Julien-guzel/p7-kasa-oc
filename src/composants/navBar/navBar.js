import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar_bouton_Acceuil">
        Accueil
      </Link>
      <Link to="/propos" className="navbar_bouton_aPropos">
        A Propos
      </Link>
    </nav>
  )
}
