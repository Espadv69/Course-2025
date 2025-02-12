import { Link } from 'react-router-dom'
import { useAuth } from '../auth/authContext'

const NavBar = () => {
  const { user, logout } = useAuth()

  return (
    <nav>
      {user && <Link to="/">Home</Link>}
      {user && user.role === 'admin' && (
        <Link to="/add-product">Add product</Link>
      )}
      {user ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </nav>
  )
}

export default NavBar
