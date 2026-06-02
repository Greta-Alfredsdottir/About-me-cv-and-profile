import { useEffect } from 'react'

function About() {
  useEffect(() => {
    document.title = 'Om'
  }, [])

  return (
    <section>
      <h1>Greta</h1>
      <p>This is me</p>
    </section>
  )
}

export default About