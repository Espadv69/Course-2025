import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const [user, setUser] = useState('') // Input user
  const [email, setEmail] = useState('') // Input email
  const [pass, setPass] = useState('') // Input pass
  const navigate = useNavigate()

  return (
    <div className="register_page">
      <h1 className="h1-title">Register</h1>
      <form>
        <input type="text" />
        <input type="text" />
        <input type="text" />
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
