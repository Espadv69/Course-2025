import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const [user, setUser] = useState('') // Input user
  const [email, setEmail] = useState('') // Input email
  const [pass, setPass] = useState('') // Input pass
  const navigate = useNavigate()

  const handleUser = (e) => {
    const value = e.target.value
    console.log('Input user:', value)
    setUser(value)
  }

  const handleEmail = (e) => {
    const value = e.target.value
    console.log('Input email:', value)
    setEmail(value)
  }

  const handlePassword = (e) => {
    const value = e.target.value
    console.log('Input Password:', value)
    setPass(value)
  }

  return (
    <div className="register_page">
      <h1 className="h1-title">Register</h1>
      <form>
        <input
          type="text"
          value={user}
          onChange={handleUser}
          placeholder="Username"
        />
        <input
          type="text"
          value={email}
          onChange={handleEmail}
          placeholder="name@example.com"
        />
        <input
          type="password"
          value={pass}
          onChange={handlePassword}
          placeholder="Password"
        />
        <button>Register</button>
        <p>
          If you have an account{' '}
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
