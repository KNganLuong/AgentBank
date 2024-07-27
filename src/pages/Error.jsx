/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <>
      <h1>404</h1>
      <h2>Page d'erreur </h2>
      <Link to='/'>Retournez sur la page d'accueil</Link>
    </>
  )
}
export default ErrorPage
