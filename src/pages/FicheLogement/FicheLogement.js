import { useParams, useNavigate } from 'react-router-dom' // import hook useParams pr récup l'id + useNavigate pour gérer les routes
import { useEffect, useState } from 'react' //import hook useState pr gére l'état du composant + useEffect Hook d'effet
import Carrousel from '../../composants/Carrousel/Carrousel'
import Host from '../../composants/host/host'
import Tags from '../../composants/tags/tags'
import Rating from '../../composants/Rating/rating'
import Collapse from '../../composants/collapse/Collapse'
import data from '../../datas/data.json'

const Location = () => {
  // Recuperation de l'id qui se trouve dans l'url
  const idLocation = useParams()
  // utiliser pour m'envoyer vers la page d'erreur si il y a une erreur dans l'url
  const navigate = useNavigate()

  // ici va se trouver l'id de l'appartement clicker
  const [appart, setAppart] = useState()

  // useEffect permet d'actualiser la page directement
  useEffect(() => {
    const getAppartInfos = () => {
      // recupere les infos dont l'id de l'url et l'id present dans la data est identique
      const getIdLocation = data.find(({ id }) => id === idLocation.id)
      // envoie les info de l'appart vers la ligne 16
      data.map(() => setAppart(getIdLocation))
      // si il y a une erreur dans l'id, renvoie vers la page d'erreur
      if (getIdLocation === undefined) {
        navigate('/*', { state: { message: 'Error' } })
      }
    }
    getAppartInfos()
  })

  // recupere "tags" dans la data
  const tagsLocation = appart && appart.tags

  // recupere les equipement et boucle grace a .map et crée un classe a chaque boucle
  const equipmentsLocation =
    appart &&
    // dans "equipements" il y a l'equipement, dans "index" il y a l'equipement aussi
    appart.equipments.map((equipments, index) => {
      return (
        <li key={index} className="ouvert__collapse__text__equipement">
          {equipments}
        </li>
      )
    })

  return (
    appart && (
      <section className="page__location" key={appart.id}>
        <Carrousel image={appart.pictures} />
        <article className="location">
          <div className="location__title">
            <div className="location__title__tags">
              <h1 className="title">{appart.title}</h1>
              <h2 className="locationh2">{appart.location}</h2>
              <div className="tags">
                <div className="tags__container">
                  {/* .map permet de boucler sur "appart.map" et de crée la div tags_container pour chaque tag */}
                  {tagsLocation.map((tag) => (
                    <Tags tags={tag} key={tag} />
                  ))}
                </div>
              </div>
            </div>
            <div className="host__rating">
              <Host host={appart.host} />
              <Rating rating={appart.rating} />
            </div>
          </div>
          <div className="descritpion__equipments">
            <div className="description">
              <Collapse title="Description" description={appart.description} />
            </div>
            <div className="equipments">
              <Collapse title="Équipements" description={equipmentsLocation} />
            </div>
          </div>
        </article>
      </section>
    )
  )
}

export default Location
