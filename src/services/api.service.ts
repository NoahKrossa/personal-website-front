import Axios from 'axios'

const USERNAME = 'API_CLIENT'
const PASSWORD = '123456'
const URL_BASE = 'http://localhost:8080/api/'

export async function loggin() {
  try {
    const response = await Axios.post(
      `${URL_BASE}user/auth`,
      {
        username: USERNAME,
        password: PASSWORD
      },
      { withCredentials: true }
    )
    if (response.status != 200) return false
    console.log(response.data)
  } catch (e) {
    console.log(e)
  }
  return true
}

export async function getAllPosts() {
  try {
    const response = await Axios.get(`${URL_BASE}post/all`, {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true
    })

    if (response.status != 200) {
      console.log('Acceso denegado')
    } else {
      console.log(response.data)
    }
  } catch (e) {
    console.log(e)
  }
}
