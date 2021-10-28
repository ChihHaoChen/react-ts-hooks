import { useEffect, useMemo, useState } from "react"


export interface Beverage {
  name: string
  producerName: string
  beverageName: string
  beverageColor: string
  beverageStyle: string
  producerLocation: string
  abv: number
  ibu: number
  logo: string
  level: number
}


const useFetchData = <Payload, >(url: string): {
  data: Payload | null
  done: boolean
} => {
  const [data, dataSet] = useState<Payload | null>(null)
  const [done, doneSet] = useState(false)

  useEffect(() => {
    fetch(url)
      .then(resp => resp.json())
      .then((d: Payload) => {
        dataSet(d)
        doneSet(true)
      })
  }, [url])

  return {
    data,
    done
  }
}


const CustomHookComponent = () => {
  const { data, done } = useFetchData<Beverage[]>('/hv-taplist.json')
  const portlandTaps = useMemo(() => (
    (data || []).filter((bev) => bev.producerLocation.includes('Portland'))
  ), [data])

  return (
    <div>
      {
        done && (
          <img
            src={data![0].logo}
            alt='Beverage logo'
          />
        )
      }
      <h2>Portland Beverage</h2>
      {
        portlandTaps.length && (
          <img
            src={portlandTaps![1].logo}
            alt='Beverage Portland logo'
          />
        )
      }
    </div>
  )
}

export default CustomHookComponent
