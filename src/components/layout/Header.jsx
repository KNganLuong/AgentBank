import { Link } from 'react-router-dom'
import argentBankLogo from '../../assets/img/argentBankLogo.png'
import { useUser } from '../../hooks/useUser'
import { useDispatch } from 'react-redux'
import { signOut } from '../../redux/User/usersSlice'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { fetchUserData } from '../../redux/Actions/AsyncAction'

const Header = () => {
  const { isAuthentified, firstName } = useUser()

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogOut = () => {
    dispatch(signOut())
    navigate('/')
  }

  useEffect(() => {
    dispatch(fetchUserData())
  }, [dispatch, isAuthentified])

  return (
    <header className='main-nav'>
      <Link to='/' className='main-nav-logo'>
        <img
          className='main-nav-logo-image'
          src={argentBankLogo}
          alt='Argent Bank Logo'
        />
        <h1 className='sr-only'>Argent Bank</h1>
      </Link>

      {isAuthentified ? (
        <div className='main-nav-item'>
          <Link to='/compte-utilisateur'>
            <i className='fa fa-user-circle'></i>
            {firstName}
          </Link>
          <Link onClick={handleLogOut}>
            <i className='fa fa-sign-out'></i>
            Sign Out
          </Link>
        </div>
      ) : (
        <Link to='/page-de-connexion' className='main-nav-item'>
          <i className='fa fa-user-circle'></i>
          Sign In
        </Link>
      )}
    </header>
  )
}

export default Header
