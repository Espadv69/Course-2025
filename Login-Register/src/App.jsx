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
import Shopping from './components/Shopping'
import Contact from './components/Contact'
import About from './components/About'

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
        <Route path="/about" element={<About />} />
        <Route path="/shopping" element={<Shopping />} />
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
