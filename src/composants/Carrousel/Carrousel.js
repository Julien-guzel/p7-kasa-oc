import { useState } from 'react' //utilisation du hook qui permet d'ajouter une variable d'état au composant
import vectorGauche from '../../images/VectorGauche.png'
import vectorDroit from '../../images/VectorDroit.png'

// au moment de l'export il faudra en l'image en parametre
export default function Carrousel({ image }) {
  // useState(0) me permet d'afficher la 1er image par defaut, Set permet de modifier la valeur de "imageAfficher"
  const [imageAfficher, setimageAfficher] = useState(0)

  // recupere le nombre de foto
  const nombreImage = image.length

  const Suivant = () => {
    // si ont arrive a l'image 5/5 ont retourne a la 1er image, sinon ont passe a l'image suivante
    setimageAfficher(imageAfficher === nombreImage - 1 ? 0 : imageAfficher + 1)
  }

  const precedent = () => {
    // si ont arrive a l'image 1/5 ont retourne a la deniere image, sinon ont passe a l'image precedente
    setimageAfficher(imageAfficher === 0 ? nombreImage - 1 : imageAfficher - 1)
  }

  return (
    <section className="carrousel">
      {/* affiche les fleches de passer les images qui si le nombre d'image est superieur a 1 */}
      {nombreImage > 1 && (
        <img
          className="carrousel__fleche__right"
          src={vectorDroit}
          alt="fleche point vers la droite"
          onClick={Suivant}
        />
      )}
      {nombreImage > 1 && (
        <img
          className="carrousel__fleche__left"
          src={vectorGauche}
          alt="fleche point vers la gauche"
          onClick={precedent}
        />
      )}

      {image.map((image, index) => {
        return (
          <div
            key={index}
            // l'image afficher auras comme className 'carrousel__image-afficher'
            // les images non afficher aura comme className 'carrousel__image-cacher'
            className={
              imageAfficher === index
                ? 'carrousel__image-afficher'
                : 'carrousel__image-cacher'
            }
          >
            {/* affichage de l'image */}
            {index === imageAfficher && (
              <img
                src={image}
                className="carrousel__image-afficher__object"
                alt="residence"
              />
            )}
            {/* mis en place du numero de l'image, exemple 1/5 */}
            {index === imageAfficher && (
              <span className="carrousel__image-afficher__number">
                {/* current + 1 car current c'est l'index de l'image et du coup l'index commence a 0, je met +1 pour conter se decalage */}
                {imageAfficher + 1}/{nombreImage}
              </span>
            )}
          </div>
        )
      })}
    </section>
  )
}
