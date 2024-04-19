import React from 'react'
import { useSelector } from 'react-redux'

function Home() {
  const users = useSelector(state => state.users.value)
  console.log(users);
  return (
    <div>
      <h1>Hello World!</h1>
      {
        users.length > 0 && users.map((index, user) => {
          return (
            <div key={index}>
              <p style={{color: 'black'}}>{user.password}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default Home