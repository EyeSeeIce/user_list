import styles from './ActionBar.module.scss'
import { ChangeEvent, useEffect, useState } from 'react'
import { useAppDispatch } from 'src/store/store'
import { useDebounce } from 'src/utils/hooks'
import { fetchUsers, setSearch } from 'src/store/slices/userSlice'
import { Input } from 'src/Components/Common/Input'
import { Button } from 'src/Components/Common/Button'

const ActionBar = () => {
  const dispatch = useAppDispatch()
  const [value, setValue] = useState<string>('')

  const debouncedSearch = useDebounce(value, 500)

  const handleChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const handleReset = () => {
    dispatch(fetchUsers())
    dispatch(setSearch({ search: '' }))
    setValue('')
  }

  useEffect(() => {
    dispatch(setSearch({ search: debouncedSearch }))
    dispatch(fetchUsers(debouncedSearch))
  }, [debouncedSearch])

  return (
    <div className={styles.actionBar}>
      <div className={styles.form}>
        <Input label="Search" value={value} onChange={e => handleChangeText(e)} />
        <Button onClick={handleReset}>Reset</Button>
      </div>
    </div>
  )
}

export default ActionBar
