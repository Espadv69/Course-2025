import { Link } from 'react-router-dom'

import '../css/NavBar.css'

const NavBar = () => {
  return (
    <nav className="nav">
      <Link to="/" className="nav-item">
        Home
      </Link>
      <Link to="/add" className="nav-item">
        Add Questions
      </Link>
      <Link to="/generate" className="nav-item">
        Generate Questions
      </Link>
      <Link to="/exam" className="nav-item">
        Take Exam
      </Link>
    </nav>
  )
}

export default NavBar
