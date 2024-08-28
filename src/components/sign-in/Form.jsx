import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { signIn } from '../../redux/Actions/AsyncAction'
import { useNavigate } from 'react-router-dom'

const SignInForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError('')
    dispatch(signIn({ email, password }))
    navigate('/compte-utilisateur')
  }

  return (
    <>
      {error && <span>{error} </span>}
      <form onSubmit={handleSubmit}>
        <div className='input-wrapper'>
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='input-wrapper'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='input-remember'>
          <input type='checkbox' id='remember-me' />
          <label htmlFor='remember-me'>Remember me</label>
        </div>

        <button type='submit' className='sign-in-button'>
          Sign In
        </button>
      </form>
    </>
  )
}
export default SignInForm
