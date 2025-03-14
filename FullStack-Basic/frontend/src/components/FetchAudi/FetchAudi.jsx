import { useState, useEffect } from 'react'
import './FetchAudi.css'

const LOCAL_URL = 'http://localhost:5000/api/audis'

const FetchAudi = () => {
  const [audis, setAudis] = useState([])

  useEffect(() => {
    const fetchAudis = async () => {
      try {
        const reponse = await fetch(LOCAL_URL)
        if (!reponse.ok) throw new Error('Server error')

        const data = await reponse.json()
        setAudis(data)
      } catch (err) {
        console.error(err)
      }
    }

    fetchAudis()
  }, [])

  return (
    <section className="container__audis">
      <h2>Audis API</h2>

      <ul className="ul__audis">
        {audis.map((audi) => (
          <li key={audi.id}>
            <h3>{audi.name}</h3>
            <p>{audi.description}</p>
            <strong>
              {audi.price}€ <span>{audi.year}</span>
            </strong>
            <img src={audi.img} alt={audi.name} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default FetchAudi
