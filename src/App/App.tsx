import styles from './App.module.scss'
import { useEffect } from 'react'
import { useAppDispatch } from 'src/store/store'
import { fetchUsers } from 'src/store/slices/userSlice'
import { ActionBar } from 'src/Components/Modules/ActionBar'
import { UserList } from 'src/Components/Modules/UserList'

const App = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  return (
    <div className={styles.wrapper}>
      <ActionBar />
      <UserList />
    </div>
  )
}

export default App
