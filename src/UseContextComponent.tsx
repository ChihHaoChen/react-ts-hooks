import UserContext, { UserState } from './store'
import { useContext, useState } from 'react'


const ConsumerComponent = () => {
  const user = useContext<UserState>(UserContext)

  return (
    <div>
      <div>First: {user.first}</div>
      <div>Last: {user.last}</div>
    </div>
  )
}



const UseContextComponent = () => {

  const [user, userSet] = useState<UserState>({
    first: 'Jenson',
    last: 'Chen'
  })

  return (
    <UserContext.Provider value={user}>
      <ConsumerComponent />
      <button
        onClick={() => {
          userSet({
            first: 'Chih-Hao',
            last: 'Chen'
          })
        }}
      >
        Change Context
      </button>
    </UserContext.Provider>
  )
}

export default UseContextComponent
