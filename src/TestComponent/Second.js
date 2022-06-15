import React from 'react'
import { useSelector } from 'react-redux'

const Second = () => {
  // const amount = useSelector(state=>state.amount)
  // const value = useSelector(state=>state.value1)

  const value = useSelector((state)=>state.changeTheNumber)

  console.log("amount : ",value)
  return (
    <div>
        <h1>by baby </h1>

        {
          value.map((val)=>(
            <tr key={val.customerId}>
              <td>{val.firstName}</td>
             
                <td>{val.lastName}</td>
                <td>{val.mobileNumber}</td>
                <td>{val.userName}</td>
                <td>{val.gender}</td>
                <td>{val.age}</td>
            </tr>
          ))
        }
    </div>
  )
}

export default Second