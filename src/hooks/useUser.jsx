import { useSelector } from 'react-redux'

export const useUser = () => {
  const isAuthentified = useSelector((state) => state.users.isAuthentified)
  const userEmail = useSelector((state) => state.users.email)
  const firstName = useSelector((state) => state.users.firstName)
  const lastName = useSelector((state) => state.users.lastName)
  const userName = useSelector((state) => state.users.userName)

  return { isAuthentified, userEmail, firstName, lastName, userName }
}
