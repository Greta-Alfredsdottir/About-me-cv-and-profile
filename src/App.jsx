import {BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import { Footer } from './components/footer/footer'
import { Navbar } from './components/navbar/navbar'



function App() {
  return (
    
        <BrowserRouter>
            <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
            <Footer />
        </BrowserRouter>
    
  )
}

export default App