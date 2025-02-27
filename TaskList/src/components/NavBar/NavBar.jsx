import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <nav className="nav">
      <Link to="/">Task List</Link>
      <Link to="/form">Task Form</Link>
    </nav>
  )
}

export default NavBar
