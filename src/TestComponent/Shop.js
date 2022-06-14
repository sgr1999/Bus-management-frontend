import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../state/index'

const Shop = () => {
  const dispatch = useDispatch();

  

  dispatch(actionCreators.depositMoney(80))
  
  return (
    <div>
        {/* <button className='btn btn-primary mx-2' onClick={()=>{dispatch(actionCreators.withdrawMoney(100))}}> - </button> */}
        update
        {/* <button className='btn btn-primary mx-2' onClick={()=>{dispatch(actionCreators.depositMoney(100))}}> + </button> */}
    </div>
  )
}

export default Shop