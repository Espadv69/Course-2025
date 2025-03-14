import { useState, useEffect } from 'react'
import './FetchAudi.css'

const LOCAL_URL = 'http://localhost:5000/api/audis'

const FetchAudi = () => {
  const [audis, setAudis] = useState([])

  useEffect(() => {
    const fetchAudis = async () => {
      try {
        const reponse = await fetch(LOCAL_URL)
        const data = await reponse.json()
        setAudis(data)
      } catch (err) {
        console.error(err)
      }
    }

    fetchAudis()
  }, [])
}

export default FetchAudi
