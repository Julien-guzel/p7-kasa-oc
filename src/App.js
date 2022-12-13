import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home/Home'
import Error from './pages/404/404'
import FicheLogement from './pages/FicheLogement/FicheLogement'
import Propos from './pages/Propos/Propos'
import Header from './composants/header/header'
import Footer from './composants/footer/footer'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<Error />} />
          <Route path="/FicheLogement/:id" element={<FicheLogement />} />
          <Route path="/Propos" element={<Propos />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App