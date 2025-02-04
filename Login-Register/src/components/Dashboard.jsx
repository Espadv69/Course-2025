import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate()
  const user = localStorage.getItem('loggedInUser')

  useEffect(() => {
    if (!user) {
      navigate('/')
    }
  }, [user, navigate])

  const handleLogOut = () => {
    localStorage.removeItem('loggedInUser')
    navigate('/')
  }
  return (
    <div>
      <h2>Welcome {user}</h2>
      <button type="button" onClick={handleLogOut}>
        Log Out
      </button>
    </div>
  )
}

export default Dashboard
