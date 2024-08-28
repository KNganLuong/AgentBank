export const updateDataUser = async ({ userName }) => {
  const token = window.localStorage.getItem('tokenAccess')

  if (!token) {
    throw new Error('No token found')
  }

  const response = await fetch('http://localhost:3001/api/v1/user/profile', {
    method: 'PUT',
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
    body: JSON.stringify({ userName }),
  })
  if (response.ok) {
    return await response.json()
  } else {
    throw new Error('Update failed')
  }
}
