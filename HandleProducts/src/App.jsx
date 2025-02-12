import { Route, Routes, Navigate } from 'react-router-dom'
import { useAuth } from './auth/authContext'
import NavBar from './components/NavBar'
import ProductList from './pages/Home'
import AddProduct from './pages/AddProduct'
import Login from './auth/Login'

const App = () => {
  const { user } = useAuth()

  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={user ? <ProductList /> : <Navigate to="/login" />}
        />
        <Route path="/login" element={<Login />} />
        {user && user.role === 'admin' && (
          <Route path="/add-product" element={<AddProduct />} />
        )}
      </Routes>
    </>
  )
}

export default App
