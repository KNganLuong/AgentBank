export const logIn = async (data) => {
  const response = await fetch('http://localhost:3001/api/v1/user/login', {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: data,
  })

  if (response.ok) {
    const responseJson = await response.json()
    const valeurToken = responseJson.body.token
    window.localStorage.setItem('tokenAccess', valeurToken)

    return { token: valeurToken }
  } else {
    throw new Error('Email/Password is incorrect')
  }
}
