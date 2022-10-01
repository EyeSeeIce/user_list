import styles from './UserList.module.scss'
import { useAppDispatch, useAppSelector } from 'src/store/store'
import { UserItem } from './modules'
import { useCallback } from 'react'
import { asyncDeleteUser } from 'src/store/slices/userSlice'

const UserList = () => {
  const dispatch = useAppDispatch()
  const { users, search } = useAppSelector(state => state.users)

  const removeUser = useCallback<(id: number) => void>(id => {
    dispatch(asyncDeleteUser(id))
  }, [])

  return (
    <div className={styles.wrapper}>
      {users.map(u => (
        <UserItem key={u.id} removeUser={removeUser} highlighter={search} {...u} />
      ))}
    </div>
  )
}

export default UserList
