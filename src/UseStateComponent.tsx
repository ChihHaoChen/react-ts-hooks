import { useState } from "react"


const UseStateComponent = () => {

  const [arr, arrSet] = useState<number[]>([])
  const [name, nameSet] = useState<string | null>()

  return (
    <div>
      <div>
        <button onClick={() => arrSet([...arr, arr.length + 1])}>
        Add number to array
        </button>
        {
          JSON.stringify(arr)
        }
      </div>
      <div>
        <button onClick={() => nameSet('Jack')}>
        Set name
        </button>
        {
          JSON.stringify(name)
        }
      </div>
    </div>
  )
}

export default UseStateComponent
