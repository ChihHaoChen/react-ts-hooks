import { createContext } from 'react'


const initialState = {
  first: "Jenson",
  last: "Chen"
}

export type UserState = typeof initialState

const context = createContext<typeof initialState>(initialState)

export default context