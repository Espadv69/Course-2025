import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const [user, setUser] = useState('') // Input user
  const [email, setEmail] = useState('') // Input email
  const [pass, setPass] = useState('') // Input pass
  const navigate = useNavigate()

  return (
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
  )
}

export default Register
