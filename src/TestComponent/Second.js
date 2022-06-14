import React from 'react'
import { useSelector } from 'react-redux'

const Second = () => {
  const amount = useSelector(state=>state.amount)
  const value = useSelector(state=>state.value1)

  console.log("amount : ",value)
  return (
    <div>
        <h1>by baby {amount} : {value}</h1>
    </div>
  )
}

export default Second