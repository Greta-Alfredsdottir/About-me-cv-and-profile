import { useEffect } from 'react'

function Contact() {
  useEffect(() => {
    document.title = 'Kontakt os'
  }, [])

  return (
    <section>
      <h1>Kontakt os</h1>
      <p>Kontaktformular eller kontaktoplysninger.</p>
    </section>
  )
}

export default Contact