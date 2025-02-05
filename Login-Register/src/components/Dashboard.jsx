import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import '../css/Dashboard.css'

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
    const logOut = window.confirm('Are you sure you want log out?')
    if (logOut) {
      localStorage.removeItem('loggedInUser')
      navigate('/')
    }
  }

  return (
    <div>
      <div className="welcome__dashboard">
        <h2>Welcome {user?.username}</h2>
        <button type="button" onClick={handleLogOut}>
          Log Out
        </button>
      </div>
    </div>
  )
}

export default Dashboard
