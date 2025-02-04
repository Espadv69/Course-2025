import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiMenu, Fix } from 'react-icons/fi'

import '../css/Navbar.css'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMobile,setIsMobile] = useState(window.innerWidth <= 900)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 900)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
}

export default Navbar
