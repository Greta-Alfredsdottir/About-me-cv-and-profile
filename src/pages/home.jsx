import { useEffect } from 'react'

function Home() {
  useEffect(() => {
    document.title = 'Hjem'
  }, [])

  return (
    <section>
      <h1>Hjem</h1>
      <p>Velkommen til forsiden.</p>
    </section>
  )
}

export default Home