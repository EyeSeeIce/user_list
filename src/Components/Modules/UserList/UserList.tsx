import styles from './UserList.module.scss'
import { useAppDispatch, useAppSelector } from 'src/store/store'
import { UserItem } from './modules'
import { useCallback } from 'react'
import { asyncDeleteUser } from 'src/store/slices/userSlice'
import { Skeleton } from 'src/Components/Common/Skeleton'

const UserList = () => {
  const dispatch = useAppDispatch()
  const { users, search, loading } = useAppSelector(state => state.users)

  const removeUser = useCallback<(id: number) => void>(id => {
    dispatch(asyncDeleteUser(id))
  }, [])

  return (
    <div className={styles.wrapper}>
      <Skeleton loading={loading} count={5}>
        {users.map(u => (
          <UserItem key={u.id} removeUser={removeUser} highlighter={search} {...u} />
        ))}
      </Skeleton>
    </div>
  )
}

export default UserList
