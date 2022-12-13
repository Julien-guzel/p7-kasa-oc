import logo from '../../images/LOGO_header.png'
import Nav from '../navBar/navBar'

export default function Header() {
  return (
    <header className="Header">
      <figure className="Header_logo_kasa">
        <img className="logo" src={logo} alt="logo de l'agence kasa" />
      </figure>
      <Nav className="nav-Header" />
    </header>
  )
}
