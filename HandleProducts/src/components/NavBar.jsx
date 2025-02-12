import { Link } from 'react-router-dom'
import { useAuth } from '../auth/authContext'

const NavBar = () => {
  const { user, logout } = useAuth()

  return (
    <nav>
      <Link to="/">Home</Link>
      {user && <button onClick={logout}>Logout</button>}
      {user && user.role === 'admin' && (
        <div>
          <Link to="/add-product">Add Product</Link>
        </div>
      )}
    </nav>
  )
}

export default NavBar
