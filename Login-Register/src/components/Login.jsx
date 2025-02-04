import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  return (
    <form>
      <input type="text" />
      <input type="text" />
      <input type="text" />
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
  )
}

export default Login
