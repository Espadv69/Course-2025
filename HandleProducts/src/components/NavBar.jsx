import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../auth/authContext'

import '../css/NavBar.css'

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

  return (
    <nav className="nav">
      {routes.map(
        (route) =>
          route.show && (
            <Link key={route.path} to={route.path}>
              {route.label}
            </Link>
          )
      )}
      {user && <button onClick={logout}>Logout</button>}
    </nav>
  )
}

export default NavBar
