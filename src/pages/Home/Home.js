import HomeBanniere from '../../composants/HomeBanniere/HomeBanniere'

import Carte from '../../composants/Card/Card'
import { Link } from 'react-router-dom'
import data from '../../datas/data.json'

const Home = () => {
  return (
    <>
      <HomeBanniere />

      <section className="carte_conteneur">
        {/* Boucle les données contenu dans "data",
puis crée la structure html avec les données injectés */}
        {data.map((dataAppart) => (
          <div className="carte__location" key={`${dataAppart.id}`}>
            {/* creation du lien vers lequ'elle l'utilisateur va etre diriger au clique sur la carte d'un l */}
            <Link
              className="lien_logement"
              to={`/FicheLogement/${dataAppart.id}`}
            >
              <Carte
                key={`${dataAppart.id}`}
                imageCarte={dataAppart.cover}
                titre={dataAppart.title}
              />
            </Link>
          </div>
        ))}
      </section>
    </>
  )
}

export default Home

// card