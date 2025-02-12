import { createContext, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext()

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  const login = (username) => {
    setUser({ name: username, role: username === 'admin' ? 'admin' : 'user' })
  }

  const logout = () => {
    setUser(null)
    navigate('/login')
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
