/* eslint-disable react/prop-types */
/* eslint-disable no-undef */

const EditingForm = ({
  firstName,
  lastName,
  newUserName,
  handleSubmit,
  handleUserNameChange,
}) => {
  return (
    <form className='edit-form' onSubmit={handleSubmit}>
      <div className='input-wrapper'>
        <label htmlFor='userName'> User Name : </label>
        <input
          type='text'
          id='username'
          value={newUserName}
          onChange={handleUserNameChange}
        ></input>
      </div>
      <div className='input-wrapper'>
        <label htmlFor='firstName'> First Name : </label>
        <input type='text' id='firstName' value={firstName} disabled />
      </div>
      <div className='input-wrapper'>
        <label htmlFor='lastName'> Last Name : </label>
        <input type='text' id='lastName' value={lastName} disabled />
      </div>
      <button className='edit-user-button' type='submit'>
        Save Changes
      </button>
    </form>
  )
}

export default EditingForm
