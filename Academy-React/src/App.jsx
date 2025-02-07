import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom'

import Navbar from './components/Navbar'
import Login from './components/Login'
import Register from './components/Register'

import Dashboard from './components/Dashboard'
import Pucharses from './components/Pucharses'
import Billing from './components/Billing'
import Contact from './components/Contact'

function Layout() {
  const location = useLocation()
  const hideNavbarRoutes = ['/', '/register']

  return (
    <>
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/pucharses" element={<Pucharses />} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

const App = () => {
  return (
    <Router>
      <Layout />
    </Router>
  )
}

export default App
