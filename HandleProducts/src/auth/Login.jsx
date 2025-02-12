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
}
