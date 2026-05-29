import { useEffect } from 'react'

function About() {
  useEffect(() => {
    document.title = 'Om'
  }, [])

  return (
    <section>
      <h1>Om</h1>
      <p>Information om virksomheden eller projektet.</p>
    </section>
  )
}

export default About