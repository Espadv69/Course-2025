import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../auth/authContext'

const NavBar = () => {
  const { user, logout } = useAuth()
  const location = useLocation()

  if (location.pathname === '/login') return null

  const routes = [
    { path: '/', label: 'Home', show: user && location.pathname !== '/' },
    {
      path: 'add-product',
      label: 'Add Product',
      show: user?.role === 'admin' && location.pathname !== '/add-product',
    },
  ]
}

export default NavBar
