import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { UserType } from 'src/types'
import { cacheMachine } from 'easy-js-cache'
import { userService } from 'src/services'
import { RootState } from 'src/store/store'

export interface ClientState {
  loading: boolean
  users: UserType[]
  search: string
}

const initialState: ClientState = {
  users: [],
  loading: false,
  search: '',
}

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    deleteUser: (state, action: { payload: { id: number } }) => {
      state.users = state.users.filter(u => u.id !== action.payload.id)
    },
    setSearch: (state, action) => {
      state.search = action.payload.search
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchUsers.pending, state => {
        state.loading = true
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload
        state.loading = false
      })
  },
})

export const fetchUsers = createAsyncThunk('users/fetchAll', async (search?: string) => {
  const key = search ? search.toLowerCase() : 'all_users'
  const searchKey = search ? search.toLowerCase() : ''
  if (cacheMachine.has(key)) {
    return cacheMachine
      .get<UserType[]>(key)
      .filter(
        u =>
          u.name.toLowerCase().includes(searchKey) ||
          u.username.toLowerCase().includes(searchKey) ||
          u.email.toLowerCase().includes(searchKey),
      )
  } else {
    const response = await userService.getUsers()
    cacheMachine.set(key, response.data)
    return response.data.filter(
      u =>
        u.name.toLowerCase().includes(searchKey) ||
        u.username.toLowerCase().includes(searchKey) ||
        u.email.toLowerCase().includes(searchKey),
    )
  }
})

export const getUserInfo = createAsyncThunk<any | undefined, number, { state: RootState }>(
  'users/getInfo',
  async (id: number, thunkAPI) => {
    const store = thunkAPI.getState()
    return store.users.users.find(u => u.id === id)
  },
)

export const asyncDeleteUser = createAsyncThunk<unknown, number>(
  'users/deleteOne',
  async (id, thunkAPI) => {
    await userService.deleteUser(id)
    thunkAPI.dispatch(deleteUser({ id }))
  },
)

export const { deleteUser, setSearch } = userSlice.actions

export default userSlice.reducer
