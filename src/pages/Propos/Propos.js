import AproposBanniere from '../../composants/AproposBanniere/AproposBanniere'
import AproposTableau from '../../datas/AproposTableau.json'
import CollapseApropos from '../../composants/collapsAPropos/CollapseAPropos'

const About = () => {
  return (
    <>
      <AproposBanniere />
      <div className="container_CollapseApropos">
      {AproposTableau.map((collapse, index) => (
        
        <CollapseApropos
          key={index}
          title={collapse.aboutTitle} //   inject le titre dans 'Collapse'
          description={collapse.aboutText} //   inject la description dans 'Collapse'
        />
      ))}
      </div>
    </>
  )
}

export default About
