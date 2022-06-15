import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { getCustomerData } from '../reduxState/action';
import { actionCreators } from '../state';
import { getAllCustomerData } from '../state/action-creators';

const First = () => {

    const value =10;

    const dispatch = useDispatch();

    // dispatch(actionCreators.passingValue(value))
    // // dispatch(actionCreators.depositMoney(80))

    useEffect(()=>{
    //  dispatch(getCustomerData(value))
    })
   
  return (
    <div>
        <h1>hello Baby {value}</h1>
        {/* <button onClick={()=>{dispatch(actionCreators.passingValue(10))}}>hello</button> */}
    </div>
  )
}

export default First