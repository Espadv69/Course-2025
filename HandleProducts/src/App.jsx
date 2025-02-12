import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { AuthProvider, useAuth } from './auth/authContext'
import NavBar from './components/NavBar'
import ProductList from './pages/Home'
import AddProduct from './pages/AddProduct'
import Login from './auth/Login'

const App = () => {
  const { user } = useAuth()

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/login" element={<Login />} />
        {user && user.role === 'admin' && (
          <Route path="/add-product" element={<AddProduct />} />
        )}
      </Routes>
    </Router>
  )
}

const WrappedApp = () => {
  ;<AuthProvider>
    <App />
  </AuthProvider>
}

export default WrappedApp
