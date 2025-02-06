import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { COURSES } from '../data/courses' // API simulated

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
      <h3 className="h3-courses_title">OUR COURSES</h3>
      <ul className="courses_ul">
        {COURSES.map((course) => (
          <li key={course.id} className="courses_li">
            <h2>{course.name}</h2>
            <p>{course.description}</p>
            <strong>{course.duration}</strong>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Dashboard
