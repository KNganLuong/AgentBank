import { accountContent } from '../../datas/UserAccountData'
import { useUser } from '../../hooks/useUser'
import Account from './Account'
import EditingUserName from './EditUserName'
import { v4 as uuidv4 } from 'uuid'

const UserProfil = () => {
  const { firstName, lastName } = useUser()

  return (
    <div className='main bg-dark'>
      <h1 className='profile-title'>
        Welcome back
        <br />
        {firstName} {lastName}
      </h1>

      <EditingUserName></EditingUserName>

      <div className='account-container'>
        <h2 className='profile-title'>Accounts</h2>
        {accountContent.map((data) => (
          <Account
            key={uuidv4()}
            title={data.title}
            amount={data.amount}
            amountDescription={data.amountDescription}
          ></Account>
        ))}
      </div>
    </div>
  )
}

export default UserProfil
