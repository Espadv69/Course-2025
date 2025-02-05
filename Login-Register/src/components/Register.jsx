import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import '../css/LoginRegister.css'

const Register = () => {
  const [username, setUsername] = useState('') // Input user
  const [email, setEmail] = useState('') // Input email
  const [pass, setPass] = useState('') // Input pass
  const navigate = useNavigate()

  const handleRegister = (e) => {
    e.preventDefault()
    const $invalid_email = document.querySelector('.invalid_email')
    const $invalid_username = document.querySelector('.invalid_username')
    $invalid_email.textContent = ''
    $invalid_username.textContent = ''
    
    const users = JSON.parse(localStorage.getItem('users')) || [] // Initialize as an empty array

    if (users.some((user) => user.email === email)) {
      $invalid_email.textContent = 'Email already registered'
      return
    }

    if (users.some((user) => user.username === username)) {
      $invalid_username.textContent = 'Username already taken'
      return
    }

    users.push({ username, email, pass })
    localStorage.setItem('users', JSON.stringify(users))
    alert('Registration successful!')
    navigate('/')
  }

  const handleUser = (e) => {
    const value = e.target.value
    setUsername(value)
  }

  const handleEmail = (e) => {
    const value = e.target.value
    setEmail(value)
  }

  const handlePassword = (e) => {
    const value = e.target.value
    setPass(value)
  }

  return (
    <div className="register_page">
      <h1 className="h1-title">Register</h1>
      <form className="form_register" onSubmit={handleRegister}>
        <input
          type="text"
          value={username}
          onChange={handleUser}
          placeholder="Username"
          required
        />
        <p className="invalid_username"></p>
        <input
          type="email"
          value={email}
          onChange={handleEmail}
          placeholder="name@example.com"
          required
        />
        <p className="invalid_email"></p>
        <input
          type="password"
          value={pass}
          onChange={handlePassword}
          placeholder="Password"
          required
        />
        <button>Register</button>
        <p>
          If you already have an account{' '}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault()
              navigate('/')
            }}
          >
            click here
          </a>
        </p>
      </form>
    </div>
  )
}

export default Register
