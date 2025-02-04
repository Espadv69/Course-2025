import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'

import '../css/Navbar.css'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900)

  const handleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 900)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <nav className="navbar">
      <div className="logo">React Academy</div>

      {isMobile && (
        <div className="menu-icon">{menuOpen ? <FiX /> : <FiMenu />}</div>
      )}

      <ul>
        <li>
          <Link to="/dashboard" onClick={handleMenu}>
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={handleMenu}>
            About
          </Link>
        </li>
        <li>
          <Link to="/services" onClick={handleMenu}>
            Services
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={handleMenu}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
