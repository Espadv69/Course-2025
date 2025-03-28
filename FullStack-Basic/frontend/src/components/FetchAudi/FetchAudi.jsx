import { useState, useEffect } from 'react'
import './FetchAudi.css'

const LOCAL_URL = 'http://localhost:5000/api/audis'

const FetchAudi = () => {
  const [audis, setAudis] = useState([])

  useEffect(() => {
    const fetchAudis = async () => {
      try {
        const response = await fetch(LOCAL_URL)
        if (!response.ok) throw new Error('Server error')

        const data = await response.json()
        setAudis(data.audi)
        console.log(data)
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
          <li key={audi.id} className="li__audis">
            <h3 className="li__audis--h3">{audi.name}</h3>
            <img
              className="li__audis--img"
              width="150px"
              src={audi.img}
              alt={audi.name}
            />
            <p className="li__audis--p">{audi.description}</p>
            <strong className="li__audis--strong">{audi.price}€</strong>
            <p>Year: {audi.year}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default FetchAudi
