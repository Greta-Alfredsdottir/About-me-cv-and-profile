import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'

import Home from './pages/Home'
import Concepts from './pages/Concepts'
import About from './pages/About'
import Contact from './pages/Contact'
import NoPage from './pages/NoPage'

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/concepts' element={<Concepts />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />

          {/* NoPage Route */}
          <Route path='*' element={<NoPage />} />
        </Routes>
      </main>
    </>
  )
}

export default App