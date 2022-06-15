export const getCustomerData=(num)=>{

    return{
        type:"getCustomer",
        payload:num
    }
}

export const findUserCustomer=(num)=>{

    return{
        type:"userCustomer",
        payload:num
    }
}