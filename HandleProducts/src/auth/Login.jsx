import { useState } from 'react'
import { useAuth } from './authContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [username, setUsername] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleLogin = () => {
    login(username)
    navigate('/')
  }

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        value={username.toLowerCase()}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter your username"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login
