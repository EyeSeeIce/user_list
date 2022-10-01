import { httpClient } from 'src/httpClient'
import { UserType } from 'src/types'

const getUsers = async () => {
  try {
    const params = new URLSearchParams()

    return await httpClient.get<UserType[]>('/users', { params })
  } catch (e) {
    return Promise.reject(e)
  }
}

const deleteUser = async (id: number) => {
  try {
    await httpClient.delete(`/users/${id}`)
  } catch (e) {
    return Promise.reject(e)
  }
}

const userService = {
  getUsers,
  deleteUser,
}

export default userService
