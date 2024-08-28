export const getUserData = async () => {
  const token = window.localStorage.getItem('tokenAccess')

  const response = await fetch('http://localhost:3001/api/v1/user/profile', {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
  })

  if (response.ok) {
    const responseJson = await response.json()

    const firstName = responseJson.body.firstName
    const lastName = responseJson.body.lastName
    const userName = responseJson.body.userName

    return { firstName: firstName, lastName: lastName, userName: userName }
  }
}
