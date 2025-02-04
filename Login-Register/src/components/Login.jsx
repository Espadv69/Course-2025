import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import '../css/LoginRegister.css'

const Login = () => {
  const [identifier, setIdentifier] = useState('') // Can be email or email
  const [pass, setPass] = useState('')
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    const users = JSON.parse(localStorage.getItem('users')) || []

    const user = users.find(
      (u) =>
        (u.email === identifier || u.username === identifier) && u.pass === pass
    )

    if (user) {
      localStorage.setItem('loggedInUser', JSON.stringify(user))
      navigate('/dashboard')
    } else {
      alert('Invalid credentials')
    }
  }

  const handleIdentifier = (e) => {
    const value = e.target.value
    setIdentifier(value)
  }

  const handlePassword = (e) => {
    const value = e.target.value
    setPass(value)
  }

  return (
    <div className="login_page">
      <h1 className="h1-title">Login</h1>
      <form className='form_login' onSubmit={handleLogin}>
        <input
          type="text"
          value={identifier}
          onChange={handleIdentifier}
          placeholder="Username or email"
          required
        />
        <input
          type="password"
          value={pass}
          onChange={handlePassword}
          placeholder="Password"
          required
        />
        <button>Login</button>
        <p>
          If you don't have an account yet{' '}
          <a
            href="/register"
            onClick={(e) => {
              e.preventDefault()
              navigate('/register')
            }}
          >
            click here
          </a>
        </p>
      </form>
    </div>
  )
}

export default Login
