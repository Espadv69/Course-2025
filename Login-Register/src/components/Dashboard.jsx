import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))
    if (!loggedInUser) {
      navigate('/')
    } else {
      setUser(loggedInUser)
    }
  }, [navigate])

  const handleLogOut = () => {
    localStorage.removeItem('loggedInUser')
    navigate('/')
  }
  return (
    <div>
      <h2>Welcome {user?.username}</h2>
      <button type="button" onClick={handleLogOut}>
        Log Out
      </button>
    </div>
  )
}

export default Dashboard
