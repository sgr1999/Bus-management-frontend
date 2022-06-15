export const depositMoney = (amount)=>{
    return (dispatch)=>{
        dispatch({
            type:'deposit',
            payload:amount
        })
    }
}

// export const withdrawMoney = (amount)=>{
//     return (dispatch)=>{
//         dispatch({
//             type:'withdraw',
//             payload:amount
//         })
//     }
// }

export const passingValue = (value1)=>{
    return (dispatch)=>{
        dispatch({
            type:'value',
            payload:value1
        })
    };
}

export const getAllCustomerData = (amount)=>{
    return (dispatch)=>{    
        dispatch({
            type:'allCustomer',
            payload:amount
        })
    };
}