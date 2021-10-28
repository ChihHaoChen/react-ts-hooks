import { createContext } from 'react'


const initialState = {
  first: "Jenson",
  last: "Chen"
}

const context = createContext<typeof initialState>(initialState)

export default context