import { useState } from 'react'
import ButtonComponent from './components/button/button'
import { Navbar } from './components/navbar/navbar'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <ButtonComponent/>
     

    </>
  )
}

export default App
