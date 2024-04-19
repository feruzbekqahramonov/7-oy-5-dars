import { createSlice } from '@reduxjs/toolkit'



  const initialState = {
    value: [],
  }

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      addUser: (state, actions) => {
        let copied = JSON.parse(JSON.stringify(state.value))
        copied.push(actions.payload)
        state.value = copied
        console.log(copied);
      }
    },
  })

  export const { addUser } = userSlice.actions
  export default userSlice.reducer
  
