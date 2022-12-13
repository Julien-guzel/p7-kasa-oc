// hook pour definir un state ( c'est une fonction )
import { useState } from 'react'
import chevronBas from '../../images/VectorBas.png'
import chevronHaut from '../../images/VectorHaut.png'

export default function Collapse({ title, description }) {
  // ouvert = useState(true) / setouvert = useState(modifier)
  const [ouvert, setouvert] = useState(true)
//   Au click sur la div "prev__collapse", "useState" deviens (false) = ouvre le chevron ( affiche le text )
  return ouvert ? ( // ? = commence par ici, si vrai affiche se qu'il y a en dessous
    <div className="description__collapse">
      <div className="collapse__container">
        <div className="collapse" onClick={() => setouvert(false)}>
          <h3 className="collapse__title">{title}</h3>
          <img src={chevronBas} alt="chevron vers le bas" />
        </div>
      </div>
    </div>
  ) : ( // : = sinon, quand setouvert passe false, sa affiche ce qu'il y a en dessous
// au click sur la div "prev__collapse", "useState" deviens ( true ) = ferme les chevrons et cache le texte
    <div className="description__collapse">
      <div className="collapse__container">
        <div className="ouvert__collapse" onClick={() => setouvert(true)}>
          <h3 className="ouvert__collapse__title">{title}</h3>
          <img src={chevronHaut} alt="chevron vers le haut" />
        </div>
        <p className="ouvert__collapse__text">{description}</p>
      </div>
    </div>
  )
}
