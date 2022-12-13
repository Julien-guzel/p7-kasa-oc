import etoile from '../../images/EtoileRouge.png'
import etoileGrise from '../../images/EtoileGrise.png'

const Note = ({ rating }) => {
  const notes = [1, 2, 3, 4, 5]

  // boucle le tableau "notes" en comparant, la note contenu dans la data, temps que le note de la data est superieur ou egale a la note contenu dans la variable "note"
  // ont insert un etoile remplit "etoile", et quand la note "note" de la data est inferieur a la note de la variable, la fonction envoie une "etoileGrise"
  return (
    <div className="rating">
      {notes.map((notesElement) =>
        rating >= notesElement ? (
          <img
            key={notesElement.toString()}
            className="etoile"
            src={etoile}
            alt="etoile"
          />
        ) : (
          <img
            key={notesElement.toString()}
            className="etoile"
            src={etoileGrise}
            alt="grise etoile"
          />
        )
      )}
    </div>
  )
}

export default Note
