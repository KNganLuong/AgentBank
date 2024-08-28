import { useDispatch } from 'react-redux'
import { useUser } from '../../hooks/useUser'
import { useState, useEffect } from 'react'
import { fetchUpdateUserData } from '../../redux/Actions/AsyncAction'
import EditingForm from './EditForm'

const EditingUserName = () => {
  const { userName, firstName, lastName } = useUser()

  const [newUserName, setNewUserName] = useState(userName)

  const [isEditing, setIsEditing] = useState(false)

  const dispatch = useDispatch()

  useEffect(() => {
    if (userName) {
      setNewUserName(userName)
    }
  }, [userName])

  const handleEdit = () => {
    setIsEditing(true)
  }

  const handleSubmit = () => {
    dispatch(fetchUpdateUserData({ userName: newUserName }))
    setIsEditing(false)
  }

  const handleUserNameChange = (event) => {
    setNewUserName(event.target.value)
  }

  const handleCancel = () => {
    setNewUserName(newUserName)
    setIsEditing(false)
  }

  return (
    <div className='edit-profile-container'>
      {isEditing ? (
        <>
          <button className='edit-button' onClick={handleCancel}>
            Cancel
          </button>
          <EditingForm
            firstName={firstName}
            lastName={lastName}
            newUserName={newUserName}
            handleSubmit={handleSubmit}
            handleUserNameChange={handleUserNameChange}
          />
        </>
      ) : (
        <button className='edit-button' onClick={handleEdit}>
          Edit Name
        </button>
      )}
    </div>
  )
}

export default EditingUserName
